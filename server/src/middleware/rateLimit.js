/**
 * Rate limiter sencillo en memoria.
 * Limita a maxRequests por windowMs por IP.
 */
const requests = new Map();

export function rateLimit({ windowMs = 60_000, maxRequests = 3 } = {}) {
  // Limpiar entradas viejas cada minuto
  setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of requests) {
      if (now - data.startTime > windowMs) {
        requests.delete(ip);
      }
    }
  }, windowMs);

  return (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress;
    const now = Date.now();
    const record = requests.get(ip);

    if (!record || now - record.startTime > windowMs) {
      requests.set(ip, { count: 1, startTime: now });
      return next();
    }

    if (record.count >= maxRequests) {
      return res.status(429).json({
        success: false,
        errors: ['Too many requests. Please try again later.'],
      });
    }

    record.count++;
    next();
  };
}
