import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import { SMTPClient } from "emailjs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import process from "process";

dotenv.config();

// Stripe Setup with validation
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error(
    "❌ ERROR: STRIPE_SECRET_KEY is not set in environment variables!"
  );
  console.error("   Please set STRIPE_SECRET_KEY in your .env file");
  process.exit(1);
}

// Validate key format
if (
  !stripeSecretKey.startsWith("sk_test_") &&
  !stripeSecretKey.startsWith("sk_live_")
) {
  console.warn("⚠️ WARNING: Stripe secret key format may be incorrect!");
  console.warn(
    "   Expected: sk_test_... (test mode) or sk_live_... (live mode)"
  );
}

const isLiveMode = stripeSecretKey.startsWith("sk_live_");
if (isLiveMode) {
  console.warn("🔴 LIVE MODE: Using production Stripe keys!");
  console.warn("   Real payments will be processed.");
} else {
  console.log("🟢 TEST MODE: Using test Stripe keys");
}

const stripe = new Stripe(stripeSecretKey);

// Email Setup
const client = new SMTPClient({
  user: process.env.SMTP_USER, // optigenix.help@gmail.com
  password: process.env.SMTP_PASS, // your Gmail App Password
  host: "smtp.gmail.com",
  ssl: true,
});

// Express Setup
const app = express();

// CORS Configuration
// Update these origins for production deployment
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "http://localhost:3000", // Alternative local port
  "http://138.197.29.179:4173", // Staging server
  // Add your production domains here:
  // "https://yourdomain.com",
  // "https://www.yourdomain.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        // In production, you might want to log this
        console.warn(`CORS blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT",
    allowedHeaders: "Content-Type",
    credentials: true,
  })
);

app.use(express.json()); // allow JSON request bodies

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ====================================
   💰 STRIPE PRICES ROUTE
==================================== */
app.get("/api/prices", async (req, res) => {
  try {
    // Fetch all active prices and expand product details
    const prices = await stripe.prices.list({
      active: true,
      expand: ["data.product"],
    });

    // Also fetch all active products to ensure we don't miss any
    const products = await stripe.products.list({
      active: true,
    });

    // Create a map of product IDs from prices
    const productsWithPrices = new Map();

    // Format prices and add to map
    prices.data.forEach((price) => {
      const product = price.product;
      const productId = product.id;

      if (!productsWithPrices.has(productId)) {
        productsWithPrices.set(productId, {
          productId: productId,
          productName: product.name,
          description: product.description || "",
          images: product.images || [],
          metadata: product.metadata || {},
          prices: [],
        });
      }

      const productData = productsWithPrices.get(productId);
      productData.prices.push({
        priceId: price.id,
        amount: price.unit_amount / 100, // Convert from cents to dollars
        currency: price.currency,
        recurring: price.recurring
          ? {
              interval: price.recurring.interval,
              intervalCount: price.recurring.interval_count,
            }
          : null,
      });
    });

    // Add products that don't have active prices but are active
    for (const product of products.data) {
      if (!productsWithPrices.has(product.id)) {
        productsWithPrices.set(product.id, {
          productId: product.id,
          productName: product.name,
          description: product.description || "",
          images: product.images || [],
          metadata: product.metadata || {},
          prices: [],
        });
      }
    }

    // Convert map to array format (backward compatible)
    const formattedPrices = Array.from(productsWithPrices.values()).flatMap(
      (productData) => {
        // If product has prices, create one entry per price (backward compatible)
        if (productData.prices.length > 0) {
          return productData.prices.map((price) => ({
            priceId: price.priceId,
            productId: productData.productId,
            productName: productData.productName,
            description: productData.description,
            amount: price.amount,
            currency: price.currency,
            recurring: price.recurring,
            images: productData.images,
            metadata: productData.metadata,
          }));
        } else {
          // If product has no prices, still include it with null price info
          return [
            {
              priceId: null,
              productId: productData.productId,
              productName: productData.productName,
              description: productData.description,
              amount: null,
              currency: null,
              recurring: null,
              images: productData.images,
              metadata: productData.metadata,
            },
          ];
        }
      }
    );

    // Log product IDs for debugging
    const productIds = formattedPrices.map((p) => p.productId);
    console.log(`✅ Fetched ${formattedPrices.length} products/prices`);
    console.log(`📦 Product IDs: ${productIds.join(", ")}`);

    // Check if specific product is included
    if (productIds.includes("prod_TiTdNCHZIX4wxg")) {
      console.log("✅ Product prod_TiTdNCHZIX4wxg is included");
    } else {
      console.log(
        "⚠️  Product prod_TiTdNCHZIX4wxg is NOT included - check if it's active in Stripe"
      );
    }

    res.json({
      success: true,
      prices: formattedPrices,
      count: formattedPrices.length,
    });
  } catch (error) {
    console.error("Stripe prices error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch prices",
      message: error.message,
    });
  }
});

/* ====================================
   📦 GET PRODUCTS ROUTE (with query filter)
==================================== */
app.get("/api/products", async (req, res) => {
  try {
    const { productIds } = req.query;

    // If productIds query param is provided, filter by those IDs
    if (productIds) {
      const productIdArray = productIds.split(",").map((id) => id.trim());
      const products = [];

      for (const productId of productIdArray) {
        try {
          // Fetch the product directly
          const product = await stripe.products.retrieve(productId);

          // Fetch all prices for this product
          const prices = await stripe.prices.list({
            product: productId,
            active: true,
          });

          products.push({
            productId: product.id,
            name: product.name,
            description: product.description || "",
            images: product.images || [],
            metadata: product.metadata || {},
            active: product.active,
            prices: prices.data.map((price) => ({
              priceId: price.id,
              amount: price.unit_amount / 100,
              currency: price.currency,
              recurring: price.recurring
                ? {
                    interval: price.recurring.interval,
                    intervalCount: price.recurring.interval_count,
                  }
                : null,
            })),
          });
        } catch (err) {
          console.error(`Error fetching product ${productId}:`, err.message);
          // Continue with other products even if one fails
        }
      }

      // Log for debugging
      console.log(
        `✅ Fetched ${products.length} product(s) by IDs: ${productIds}`
      );
      if (products.length > 0) {
        console.log(
          `📦 Product IDs found: ${products.map((p) => p.productId).join(", ")}`
        );
        // Check for specific gene test product
        if (productIdArray.includes("prod_TiTbpgcnqcuA5d")) {
          const geneTestProduct = products.find(
            (p) => p.productId === "prod_TiTbpgcnqcuA5d"
          );
          if (geneTestProduct) {
            console.log("✅ Gene test product (prod_TiTbpgcnqcuA5d) found!");
          } else {
            console.warn(
              "⚠️  Gene test product (prod_TiTbpgcnqcuA5d) NOT found - check if it's active in Stripe"
            );
          }
        }
      } else {
        console.warn(`⚠️  No products found for IDs: ${productIds}`);
      }

      res.json({
        success: true,
        products: products,
        count: products.length,
      });
    } else {
      // If no productIds, return all active products
      const products = await stripe.products.list({
        active: true,
      });

      const productsWithPrices = await Promise.all(
        products.data.map(async (product) => {
          const prices = await stripe.prices.list({
            product: product.id,
            active: true,
          });

          return {
            productId: product.id,
            name: product.name,
            description: product.description || "",
            images: product.images || [],
            metadata: product.metadata || {},
            active: product.active,
            prices: prices.data.map((price) => ({
              priceId: price.id,
              amount: price.unit_amount / 100,
              currency: price.currency,
              recurring: price.recurring
                ? {
                    interval: price.recurring.interval,
                    intervalCount: price.recurring.interval_count,
                  }
                : null,
            })),
          };
        })
      );

      res.json({
        success: true,
        products: productsWithPrices,
        count: productsWithPrices.length,
      });
    }
  } catch (error) {
    console.error("Stripe products fetch error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch products",
      message: error.message,
    });
  }
});

/* ====================================
   🔍 GET PRODUCT BY ID ROUTE
==================================== */
app.get("/api/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    // Fetch the product directly
    const product = await stripe.products.retrieve(productId);

    // Fetch all prices for this product
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
    });

    res.json({
      success: true,
      product: {
        productId: product.id,
        productName: product.name,
        description: product.description || "",
        images: product.images || [],
        metadata: product.metadata || {},
        active: product.active,
        prices: prices.data.map((price) => ({
          priceId: price.id,
          amount: price.unit_amount / 100,
          currency: price.currency,
          recurring: price.recurring
            ? {
                interval: price.recurring.interval,
                intervalCount: price.recurring.interval_count,
              }
            : null,
        })),
      },
    });
  } catch (error) {
    console.error("Stripe product fetch error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch product",
      message: error.message,
    });
  }
});

/* ====================================
   📧 SEND EMAIL ROUTE
==================================== */
app.post("/api/send-mail", async (req, res) => {
  const { email, subject, messageHTML, messageText } = req.body;

  if (!email || !subject) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing fields." });
  }

  try {
    await client.sendAsync({
      from: "OptiGenix <optigenix.help@gmail.com>",
      to: email,
      subject,
      text: messageText,
      attachment: [{ data: messageHTML, alternative: true }],
    });

    res.json({ status: "success", message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to send email.",
      error: error,
    });
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
