import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { HelpCircle, Lock } from "lucide-react";

/**
 * StripeCheckoutForm Component
 *
 * Professional, reusable Stripe payment form component
 * Can be used anywhere in the application for payment processing
 *
 * @param {Object} props
 * @param {number} props.amount - Payment amount in dollars
 * @param {Function} props.onSuccess - Success callback (receives paymentIntent)
 * @param {Function} props.onError - Error callback (receives error)
 * @param {Object} props.formData - Customer form data (email, address, etc.)
 * @param {boolean} props.useShippingAsBilling - Use shipping as billing address
 * @param {Function} props.setUseShippingAsBilling - Setter for useShippingAsBilling
 * @param {boolean} props.loading - External loading state (optional)
 * @param {string} props.clientSecret - Pre-created client secret (optional)
 * @param {Function} props.onCreatePaymentIntent - Callback to create payment intent (optional)
 */
const StripeCheckoutForm = ({
  amount,
  onSuccess,
  onError,
  formData = {},
  useShippingAsBilling = true,
  setUseShippingAsBilling = null,
  loading: externalLoading = false,
  clientSecret: externalClientSecret = null,
  onCreatePaymentIntent = null,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(externalClientSecret);
  const [cardholderName, setCardholderName] = useState("");

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
        color: "#010907",
        "::placeholder": {
          color: "rgba(1, 9, 7, 0.5)",
        },
      },
      invalid: {
        color: "#dc2626",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!cardholderName.trim()) {
      setError("Please enter the name on card");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Step 1: Get or create payment intent
      let secret = clientSecret || externalClientSecret;

      if (!secret && onCreatePaymentIntent) {
        secret = await onCreatePaymentIntent(amount);
        if (secret) {
          setClientSecret(secret);
        }
      }

      if (!secret) {
        throw new Error("Payment intent not available");
      }

      // Step 2: Confirm payment
      const cardNumberElement = elements.getElement(CardNumberElement);
      const { error: confirmError, paymentIntent } =
        await stripe.confirmCardPayment(secret, {
          payment_method: {
            card: cardNumberElement,
            billing_details: {
              name: cardholderName,
              email: formData?.email,
              address: useShippingAsBilling
                ? {
                    line1: formData?.address,
                    line2: formData?.apartment,
                    city: formData?.city,
                    state: formData?.state,
                    postal_code: formData?.zipCode,
                    country: "US",
                  }
                : undefined,
            },
          },
        });

      if (confirmError) {
        setError(confirmError.message);
        if (onError) onError(confirmError);
      } else if (paymentIntent.status === "succeeded") {
        if (onSuccess) onSuccess(paymentIntent);
      }
    } catch (err) {
      const errorMessage = err.message || "Payment processing failed";
      setError(errorMessage);
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  };

  const isLoading = loading || externalLoading;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-[5px]">
        <h2 className="font-funnel font-semibold !text-[21px] !leading-[25.2px] text-[#010907]">
          Payment
        </h2>
        <p className="text-inter text-[14px] text-[#707070] leading-[21px]">
          All transactions are secure and encrypted.
        </p>
      </div>

      {/* Payment Method Selection */}
      <div className="bg-white border border-[#dedede] rounded-lg overflow-hidden">
        {/* Credit Card Header */}
        <div className="bg-[#f2f8f4] h-[50px] relative border-b border-[rgba(247,247,247,0.2)]">
          <div className="flex absolute left-5 top-1/2 gap-3 items-center -translate-y-1/2">
            <div className="w-[18px] h-[18px] rounded-full bg-white border-[6px] border-[#0d8360]"></div>
            <span className="text-inter text-[14px] text-[#010907]">
              Credit card
            </span>
          </div>
          <div className="flex absolute right-5 top-1/2 gap-2 items-center -translate-y-1/2">
            {/* Card logos */}
            <div className="w-[38px] h-6 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-600">VISA</span>
            </div>
            <div className="w-[38px] h-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="-ml-3 w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-[38px] h-6 flex items-center justify-center">
              <span className="text-[8px] font-bold text-blue-700">AMEX</span>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.07)] rounded px-2 py-1">
              <span className="text-[12px] font-semibold text-[#0d8360]">
                +5
              </span>
            </div>
          </div>
          <div className="absolute inset-0 border border-[#0d8360] rounded-t-lg pointer-events-none"></div>
        </div>

        {/* Payment Form Fields */}
        <div className="bg-[rgba(247,247,247,0.2)] p-[14px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
            <div className="border border-[#c7c7c7] rounded-lg px-4 py-[8px] bg-white">
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                placeholder="Name on card"
                className="w-full text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none"
              />
            </div>

            <div className="border border-[#c7c7c7] rounded-lg px-4 py-[8px] bg-white h-[44px] flex items-center justify-between">
              <div className="flex-1">
                <CardNumberElement
                  options={cardElementOptions}
                  className="w-full"
                />
              </div>
              <Lock className="w-[18px] h-[14px] text-[#010907] opacity-30 shrink-0 ml-2" />
            </div>

            <div className="flex gap-[14px]">
              <div className="flex-1 border border-[#c7c7c7] rounded-lg px-4 py-[8px] bg-white h-[44px] flex items-center">
                <CardExpiryElement
                  options={cardElementOptions}
                  className="w-full"
                />
              </div>
              <div className="flex-1 border border-[#c7c7c7] rounded-lg px-4 py-[8px] bg-white h-[44px] flex items-center justify-between">
                <div className="flex-1">
                  <CardCvcElement
                    options={cardElementOptions}
                    className="w-full"
                  />
                </div>
                <HelpCircle className="w-[18px] h-[18px] text-[#010907] opacity-30 shrink-0 ml-2" />
              </div>
            </div>

            {/* Billing Address Checkbox */}
            {setUseShippingAsBilling && (
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  id="useShippingBilling"
                  checked={useShippingAsBilling}
                  onChange={(e) => setUseShippingAsBilling(e.target.checked)}
                  className="w-[18px] h-[18px] rounded border-2 border-[#0d8360] bg-white checked:bg-[#0d8360] focus:ring-2 focus:ring-[#0d8360] cursor-pointer"
                />
                <label
                  htmlFor="useShippingBilling"
                  className="text-inter text-[14px] text-[#010907] cursor-pointer"
                >
                  Use shipping address as billing address
                </label>
              </div>
            )}

            {error && (
              <div className="p-3 text-sm text-red-700 bg-red-50 rounded border border-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!stripe || isLoading}
              className="bg-[#0d8360] text-white px-[22px] py-[14px] rounded-full font-funnel font-semibold text-[16px] leading-[24px] hover:bg-[#0a6b4f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckoutForm;
