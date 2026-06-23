import { Router } from 'express';
import nodemailer from 'nodemailer';
import { validateContact } from '../middleware/validate.js';
import { rateLimit } from '../middleware/rateLimit.js';
import { contactEmailTemplate } from '../templates/contactEmail.js';

const router = Router();

// Configurar transporter de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Rate limit: máximo 3 correos por minuto por IP
const contactLimiter = rateLimit({ windowMs: 60_000, maxRequests: 3 });

router.post('/', contactLimiter, validateContact, async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `📬 Nuevo mensaje de ${name}`,
      html: contactEmailTemplate({ name, email, message }),
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      errors: ['Failed to send email. Please try again later.'],
    });
  }
});

export default router;
