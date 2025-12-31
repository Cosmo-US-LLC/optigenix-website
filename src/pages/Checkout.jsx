import React from "react";

const Checkout = () => {
  const paymentLinkUrl = "https://buy.stripe.com/test_bJe9AM2QM4wb0vIae54ZG00";

  return (
    <div className="min-h-screen bg-[#f1f1f1] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-gray-600 text-lg">
            Secure checkout powered by Stripe
          </p>
        </div>

        {/* Payment Form Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mb-6 pb-6 border-b">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm text-gray-600">
                Your payment information is secure and encrypted
              </span>
            </div>

            {/* Stripe Payment Link Embed */}
            <div className="w-full">
              <iframe
                src={paymentLinkUrl}
                className="w-full min-h-[600px] border-0 rounded-lg"
                title="Stripe Payment Form"
                allow="payment"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            By completing your purchase, you agree to our{" "}
            <a
              href="/terms-and-conditions"
              className="text-blue-600 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
