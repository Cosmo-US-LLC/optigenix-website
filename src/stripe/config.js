// Get Stripe publishable key from environment
const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

// Debug logging
if (import.meta.env.DEV) {
  console.log("🔍 Environment Check:");
  console.log(
    "  - import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY exists:",
    !!stripeKey
  );
  console.log(
    "  - Value (first 30 chars):",
    stripeKey ? stripeKey.substring(0, 30) + "..." : "undefined"
  );
  console.log("  - Is placeholder:", stripeKey === "pk_test_your_key_here");
  console.log(
    "  - All VITE_ env vars:",
    Object.keys(import.meta.env).filter((k) => k.startsWith("VITE_"))
  );
}

if (!stripeKey || stripeKey === "pk_test_your_key_here") {
  console.error("❌ ERROR: VITE_STRIPE_PUBLISHABLE_KEY is not set correctly!");
  console.error("   Current value:", stripeKey || "undefined");
  console.error("   Expected: pk_test_51SkIoN5tkYGbSfyj...");
  console.error("   Action: Please restart your dev server (npm run dev)");
}

export const STRIPE_PUBLISHABLE_KEY = stripeKey || "pk_test_your_key_here";
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// Final check
if (import.meta.env.DEV) {
  console.log("✅ Final Config:");
  console.log(
    "  🔑 Stripe Key:",
    STRIPE_PUBLISHABLE_KEY.substring(0, 20) + "..."
  );
  console.log("  🔗 Backend URL:", BACKEND_URL);

  if (STRIPE_PUBLISHABLE_KEY === "pk_test_your_key_here") {
    console.warn(
      "⚠️ WARNING: Using fallback key! Restart dev server to load .env file."
    );
  }
}
