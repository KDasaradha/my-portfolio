import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

// Load environment variables
const {
  GMAIL_USER,
  GMAIL_APP_PASSWORD, // App password instead of OAuth2
} = process.env;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Validate environment variables
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("❌ Missing required environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    // Create Nodemailer transporter with App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (verifyError) {
      console.error("❌ SMTP verification failed:", verifyError);
      return res.status(500).json({ error: "Email service configuration error" });
    }

    // Email content with proper subject handling
    const emailSubject = subject || `New Contact Form Submission from ${name}`;
    const mailOptions = {
      from: `"Portfolio Contact" <${GMAIL_USER}>`, // Use authenticated email as sender
      replyTo: `"${name}" <${email}>`, // Set reply-to as the form submitter
      to: GMAIL_USER,
      subject: emailSubject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return res.status(200).json({ 
      success: "Email sent successfully!",
      messageId: info.messageId 
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({ 
      error: "Failed to send email. Please try again later." 
    });
  }
}