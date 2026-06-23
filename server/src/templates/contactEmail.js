/**
 * Genera la plantilla HTML del correo de contacto.
 */
export function contactEmailTemplate({ name, email, message }) {
  const date = new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f0fdfa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f0fdfa; padding: 40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="580" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(13, 148, 136, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d9488, #2dd4bf); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                ✉️ Nuevo mensaje de contacto
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">
                Desde tu portafolio personal
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 32px 40px;">

              <!-- Sender info -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #f0fdfa; border-radius: 12px; border-left: 4px solid #0d9488;">
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Nombre</span>
                          <br />
                          <span style="color: #0a0a0a; font-size: 16px; font-weight: 600;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Email</span>
                          <br />
                          <a href="mailto:${email}" style="color: #0d9488; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; display: block; margin-bottom: 8px;">Mensaje</span>
                <div style="background-color: #fafafa; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; color: #1a1a1a; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Reply button -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <tr>
                  <td align="center" style="border-radius: 8px; background: linear-gradient(135deg, #0d9488, #2dd4bf);">
                    <a href="mailto:${email}?subject=Re: Mensaje desde mi portafolio" style="display: inline-block; padding: 12px 32px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">
                      Responder a ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Recibido el ${date}
              </p>
              <p style="margin: 4px 0 0; color: #9ca3af; font-size: 12px;">
                Juan Jose Cuadros — Portfolio
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
