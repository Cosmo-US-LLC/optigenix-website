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

// Validate Stripe key format
if (!stripeKey || stripeKey === "pk_test_your_key_here") {
  console.error("❌ ERROR: VITE_STRIPE_PUBLISHABLE_KEY is not set correctly!");
  console.error("   Current value:", stripeKey || "undefined");
  console.error("   Expected format: pk_test_... or pk_live_...");
  console.error(
    "   Action: Please check your .env file and restart your dev server (npm run dev)"
  );
} else if (
  !stripeKey.startsWith("pk_test_") &&
  !stripeKey.startsWith("pk_live_")
) {
  console.warn("⚠️ WARNING: Stripe key format may be incorrect!");
  console.warn(
    "   Expected: pk_test_... (test mode) or pk_live_... (live mode)"
  );
  console.warn("   Current:", stripeKey.substring(0, 20) + "...");
}

export const STRIPE_PUBLISHABLE_KEY = stripeKey || "pk_test_your_key_here";
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://optigenix-website-backend.vercel.app";

// Final check
if (import.meta.env.DEV) {
  const isLiveMode = STRIPE_PUBLISHABLE_KEY.startsWith("pk_live_");
  const isTestMode = STRIPE_PUBLISHABLE_KEY.startsWith("pk_test_");

  console.log("✅ Final Config:");
  console.log(
    "  🔑 Stripe Key:",
    STRIPE_PUBLISHABLE_KEY.substring(0, 20) + "..."
  );
  console.log(
    "  🎯 Mode:",
    isLiveMode ? "🔴 LIVE MODE" : isTestMode ? "🟢 TEST MODE" : "⚠️ UNKNOWN"
  );
  console.log("  🔗 Backend URL:", BACKEND_URL);

  if (STRIPE_PUBLISHABLE_KEY === "pk_test_your_key_here") {
    console.warn(
      "⚠️ WARNING: Using fallback key! Restart dev server to load .env file."
    );
  }

  if (isLiveMode) {
    console.warn(
      "🔴 LIVE MODE DETECTED: You are using production Stripe keys!"
    );
    console.warn(
      "   Real payments will be processed. Use test mode for development."
    );
  }
}
