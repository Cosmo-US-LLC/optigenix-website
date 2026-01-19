import { SMTPClient } from "emailjs";

const REQUIRED_FIELDS = ["email", "subject", "messageHTML", "messageText"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const missing = REQUIRED_FIELDS.filter((key) => !req.body?.[key]);

  if (missing.length > 0) {
    return res.status(400).json({
      status: "error",
      message: `Missing fields: ${missing.join(", ")}`,
    });
  }

  const client = new SMTPClient({
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASS,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    await client.sendAsync({
      from: "OptiGenix <optigenix.help@gmail.com>",
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.messageText,
      attachment: [{ data: req.body.messageHTML, alternative: true }],
    });

    res.json({ status: "success", message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send failure:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to send email",
    });
  } finally {
    try {
      client.close();
    } catch (closeError) {
      console.warn("SMTP client close failed:", closeError);
    }
  }
}
