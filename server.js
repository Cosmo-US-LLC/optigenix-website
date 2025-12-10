import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import { SMTPClient } from "emailjs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";


dotenv.config();

// Stripe Setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Email Setup
const client = new SMTPClient({
  user: process.env.SMTP_USER,        // optigenix.help@gmail.com
  password: process.env.SMTP_PASS,    // your Gmail App Password
  host: "smtp.gmail.com",
  ssl: true,
});

// Express Setup
const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://yourdomain.com"
  ],
  methods: "GET,POST,PUT",
  allowedHeaders: "Content-Type"
}));

app.use(express.json()); // allow JSON request bodies

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ====================================
   📧 SEND EMAIL ROUTE
==================================== */
app.post("/api/send-mail", async (req, res) => {

  const { email, subject, message, messageHTML, messageText } = req.body;

  if (!email || !subject) {
    return res.status(400).json({ status: "error", message: "Missing fields." });
  }

  try {
    await client.sendAsync({
      from: "OptiGenix <optigenix.help@gmail.com>",
      to: email,
      subject,
      text: messageText,
      attachment: [
        { data: messageHTML, alternative: true }
      ]
    });

    res.json({ status: "success", message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ status: "error", message: "Failed to send email." });
  }
});

/* ====================================
   💳 STRIPE CHECKOUT SESSION ROUTE
==================================== */
app.post("/api/create-checkout-session", async (req, res) => {
  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "Missing priceId" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "https://yourdomain.com/success",
      cancel_url: "https://yourdomain.com/cancel",
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error("Stripe session error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

/* ====================================
   🟩 SERVE VITE REACT BUILD (dist/)
==================================== */
app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


/* ====================================
   🚀 START SERVER
==================================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
  console.log("Stripe key (test):", process.env.STRIPE_SECRET_KEY);
});
