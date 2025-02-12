// import nodemailer from "nodemailer";
// import { google } from "googleapis";
// import { NextApiRequest, NextApiResponse } from "next";

// // Configure OAuth2 Client
// const OAuth2Client = new google.auth.OAuth2(
//   process.env.GMAIL_CLIENT_ID,
//   process.env.GMAIL_CLIENT_SECRET,
//   "https://developers.google.com/oauthplayground" // Redirect URI
// );

// OAuth2Client.setCredentials({
//   refresh_token: process.env.GMAIL_REFRESH_TOKEN,
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   try {
//     // Get access token
//     const { token } = await OAuth2Client.getAccessToken();

//   if (!token) {
//     console.error("❌ Failed to generate access token");
//     return res.status(500).json({ error: "Failed to generate access token" });
//   }

//     // Create Nodemailer transporter with OAuth2
//     // const transporter = nodemailer.createTransport({
//     //   service: "gmail",
//     //   auth: {
//     //     type: "OAuth2",
//     //     user: process.env.GMAIL_USER,
//     //     clientId: process.env.GMAIL_CLIENT_ID,
//     //     clientSecret: process.env.GMAIL_CLIENT_SECRET,
//     //     refreshToken: process.env.GMAIL_REFRESH_TOKEN,
//     //     accessToken: token,
//     //   },
//     // });
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.GMAIL_USER,
//         clientId: process.env.GMAIL_CLIENT_ID,
//         clientSecret: process.env.GMAIL_CLIENT_SECRET,
//         refreshToken: process.env.GMAIL_REFRESH_TOKEN,
//         accessToken: token,
//       },
//       tls: {
//         rejectUnauthorized: false, // Add this if TLS issues occur
//       },
//     });
    

//     // Email content
//     const mailOptions = {
//       from: `"${name}" <${email}>`, // Sender details
//       to: process.env.GMAIL_USER, // Your Gmail to receive emails
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ success: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ error: "Failed to send email. Please try again." });
//   }
// }



import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

// Configure OAuth2 Client
const OAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI // Redirect URI
);

OAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Get access token
    const accessTokenResponse = await OAuth2Client.getAccessToken();
    const token = accessTokenResponse?.token;

    if (!token) {
      console.error("❌ Failed to generate access token");
      return res.status(500).json({ error: "Failed to generate access token" });
    }

    // Create Nodemailer transporter with OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: token,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender details
      to: process.env.GMAIL_USER, // Your Gmail to receive emails
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}