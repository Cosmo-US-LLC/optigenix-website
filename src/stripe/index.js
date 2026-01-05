/**
 * Stripe Module - Professional Payment Integration
 *
 * This module provides a complete, reusable Stripe payment solution
 * that can be used throughout the application.
 *
 * Usage:
 * ```jsx
 * import { StripeProvider, useStripeCheckout } from '@/stripe';
 *
 * function MyComponent() {
 *   const { stripeProduct, totals, processPayment } = useStripeCheckout({
 *     productId: 'prod_TiTdNCHZIX4wxg',
 *     onSuccess: (paymentIntent) => console.log('Success!', paymentIntent),
 *   });
 *
 *   return <StripeProductDisplay product={stripeProduct} />;
 * }
 * ```
 */

// Services
export {
  fetchStripePrices,
  fetchStripeProductById,
  createPaymentIntent,
  createCheckoutSession,
  fetchCheckoutSession,
  calculateTotals,
} from "./services/stripeService";

// Hooks
export { useStripeCheckout } from "./hooks/useStripeCheckout";

// Components
export { default as StripeCheckoutForm } from "./components/StripeCheckoutForm";
export { default as StripeProductDisplay } from "./components/StripeProductDisplay";
export { default as ContactInformationSection } from "./components/ContactInformationSection";
export { default as ShippingAddressSection } from "./components/ShippingAddressSection";

// Config
export { STRIPE_PUBLISHABLE_KEY, BACKEND_URL } from "./config";

// Stripe Provider (for Elements wrapper)
export { default as StripeProvider } from "./components/StripeProvider";
