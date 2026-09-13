import express from 'express'
import nodemailer from 'nodemailer'
import Message from '../models/Message.js'

const router = express.Router()

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    // Save to MongoDB
    const doc = await Message.create({ name, email, message })

    // Send email notification (only if credentials are configured)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        })

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
          to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
          subject: `📬 New message from ${name} — Portfolio`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #0a0a0f; color: #f1f1f3; padding: 32px; border-radius: 16px;">
              <h2 style="color: #a78bfa; font-size: 22px; margin-bottom: 24px;">New Portfolio Message</h2>
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #a78bfa;">From:</strong> ${name}</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #a78bfa;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
                <p style="margin: 0;"><strong style="color: #a78bfa;">Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px;">
                <p style="margin: 0 0 8px 0; color: #a78bfa; font-weight: 600;">Message:</p>
                <p style="margin: 0; line-height: 1.6; color: #d1d5db; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #4b5563; text-align: center;">
                Saved to MongoDB · ID: ${doc._id}
              </p>
            </div>
          `,
        })
      } catch (mailErr) {
        // Email failure is non-critical — message is already saved
        console.warn('Email notification failed:', mailErr.message)
      }
    }

    return res.status(201).json({
      success: true,
      message: "Thanks! I'll get back to you soon.",
    })
  } catch (err) {
    console.error('Contact error:', err)
    if (err.name === 'ValidationError') {
      const msg = Object.values(err.errors).map(e => e.message).join('. ')
      return res.status(400).json({ error: msg })
    }
    return res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

export default router
