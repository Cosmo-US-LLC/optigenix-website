import Stripe from "stripe";
import express from "express";
import process from "process";
import { SMTPClient } from "emailjs";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const client = new SMTPClient({
  user: "user",
  password: "password",
  host: "smtp.your-email.com",
  ssl: true,
});

router.post("/send-mail", async (req, res) => {
  const { email, subject, message } = req.body;
  console.log(`Email: ${email}, Subject: ${subject}, Message: ${message}`);

  try {
    await client.sendAsync({
      from: "Your Name",
      to: email,
      subject: subject,
      text: message,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to send email." });
  }

  res.json({ status: "success", message: "Email sent successfully!" });
});

router.post("/create-checkout-session", async (req, res) => {
  const { priceId } = req.body; // price_xxx from Stripe dashboard

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: "https://yourdomain.com/success",
    cancel_url: "https://yourdomain.com/cancel",
  });

  res.json({ url: session.url });
});

// router.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
//   const sig = req.headers["stripe-signature"];
//   const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     // Fulfill order instantly
//     console.log(`Payment for session ${session.id} was successful!`);
//   }

//   res.sendStatus(200);
// });

export default router;
