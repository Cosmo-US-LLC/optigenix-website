import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "../config";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

/**
 * StripeProvider Component
 * 
 * Wraps components that need Stripe Elements
 * Must be used around any component using Stripe payment forms
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Child components
 * @param {Object} props.options - Additional Stripe Elements options
 */
const StripeProvider = ({ children, options = {} }) => {
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};

export default StripeProvider;

