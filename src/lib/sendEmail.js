// Sends the contact form through EmailJS's REST API (no extra dependency needed).
// Configure the three VITE_EMAILJS_* variables in ".env" (see .env.example and README).

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/**
 * @returns {Promise<{ok: true} | {ok: false, reason: 'not-configured' | 'failed' | 'network'}>}
 */
export async function sendEmail({ name, email, subject, message }) {
  // Never pretend a message was sent when EmailJS isn't set up.
  if (!isEmailConfigured) return { ok: false, reason: 'not-configured' }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
          message,
        },
      }),
    })

    return response.ok ? { ok: true } : { ok: false, reason: 'failed' }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
