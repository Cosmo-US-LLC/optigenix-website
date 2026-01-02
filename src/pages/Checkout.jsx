import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  StripeProvider,
  useStripeCheckout,
  StripeCheckoutForm,
  StripeProductDisplay,
} from "../stripe";

// Product IDs for different sources
const QUIZ_PRODUCT_ID = "prod_TiTdNCHZIX4wxg";
const GENE_TEST_PRODUCT_ID = "prod_TiTbpgcnqcuA5d";

// Initialize state from localStorage and URL
const getInitialState = (pathname) => {
  // Determine source from URL first - URL takes priority
  let sourceFromUrl = null;
  if (pathname.includes("/gene-test/checkout")) {
    sourceFromUrl = "gene-test";
  } else if (pathname.includes("/quiz/checkout")) {
    sourceFromUrl = "quiz";
  }

  // If URL indicates a source, use that source regardless of localStorage
  if (sourceFromUrl === "gene-test") {
    // Try to get data from localStorage, but always use gene test product ID
    const geneTestData = localStorage.getItem("geneTestCheckoutData");
    if (geneTestData) {
      try {
        const data = JSON.parse(geneTestData);
        return {
          source: "gene-test",
          geneTestData: data,
          amount: data.amount || 89.0,
          subtotal: data.amount || 89.0,
          productId: GENE_TEST_PRODUCT_ID, // Always use gene test product ID
        };
      } catch (error) {
        console.error("Error parsing gene test data:", error);
      }
    }
    // No localStorage data, but URL says gene-test
    return {
      source: "gene-test",
      geneTestData: null,
      amount: 89.0,
      subtotal: 89.0,
      productId: GENE_TEST_PRODUCT_ID,
    };
  } else if (sourceFromUrl === "quiz") {
    // Try to get data from localStorage, but always use quiz product ID
    const quizData = localStorage.getItem("quizCheckoutData");
    if (quizData) {
      try {
        const data = JSON.parse(quizData);
        const total = data.total || 74.99;
        const calcSubtotal =
          data.products?.reduce((sum, p) => sum + (p.price || 14.99), 0) ||
          total;
        return {
          source: "quiz",
          quizData: data,
          amount: total,
          subtotal: calcSubtotal,
          productId: QUIZ_PRODUCT_ID, // Always use quiz product ID
        };
      } catch (error) {
        console.error("Error parsing quiz data:", error);
      }
    }
    // No localStorage data, but URL says quiz
    return {
      source: "quiz",
      quizData: null,
      amount: 74.99,
      subtotal: 74.99,
      productId: QUIZ_PRODUCT_ID,
    };
  }

  // Fallback: No URL match, check localStorage (for /checkout route)
  const geneTestData = localStorage.getItem("geneTestCheckoutData");
  if (geneTestData) {
    try {
      const data = JSON.parse(geneTestData);
      return {
        source: "gene-test",
        geneTestData: data,
        amount: data.amount || 89.0,
        subtotal: data.amount || 89.0,
        productId: data.stripeProductId || GENE_TEST_PRODUCT_ID,
      };
    } catch (error) {
      console.error("Error parsing gene test data:", error);
    }
  }

  const storedData = localStorage.getItem("quizCheckoutData");
  if (storedData) {
    try {
      const data = JSON.parse(storedData);
      const total = data.total || 74.99;
      const calcSubtotal =
        data.products?.reduce((sum, p) => sum + (p.price || 14.99), 0) || total;
      return {
        source: "quiz",
        quizData: data,
        amount: total,
        subtotal: calcSubtotal,
        productId: QUIZ_PRODUCT_ID,
      };
    } catch (error) {
      console.error("Error parsing quiz data:", error);
    }
  }

  // Default fallback
  return {
    source: "default",
    quizData: null,
    amount: 89.0,
    subtotal: 219.97,
    productId: null,
  };
};

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = getInitialState(location.pathname);
  // Handle both quiz data and gene test data
  const [checkoutData] = useState(
    initialState.quizData || initialState.geneTestData
  );
  const [source] = useState(initialState.source);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const [paymentError, setPaymentError] = useState(null);

  // Dynamically determine product ID based on checkout source and URL
  // Gene test uses prod_TiTbpgcnqcuA5d, Quiz uses prod_TiTdNCHZIX4wxg
  const productId = initialState.productId || null;

  console.log("🛒 Checkout URL Path:", location.pathname);
  console.log("🛒 Checkout Source:", source);
  console.log("🛒 Product ID for Stripe:", productId);
  console.log("🛒 Checkout Data:", checkoutData);

  // Use professional Stripe checkout hook - fetches product based on route
  const {
    loading: loadingStripe,
    stripeProduct,
    totals,
    processPayment,
  } = useStripeCheckout({
    productId: productId, // Gene test: prod_TiTbpgcnqcuA5d, Quiz: prod_TiTdNCHZIX4wxg
    onSuccess: (paymentIntent) => {
      console.log("Payment successful:", paymentIntent);
      handleSuccess(paymentIntent);
    },
    onError: (error) => {
      console.error("Stripe error:", error);
      setPaymentError(error.message || "Payment processing failed");
    },
  });

  // Payment error is handled by onError callback in useStripeCheckout

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSuccess = (paymentIntent) => {
    console.log("Payment succeeded:", paymentIntent);

    // Clear checkout data from localStorage (both quiz and gene test)
    localStorage.removeItem("quizCheckoutData");
    localStorage.removeItem("geneTestCheckoutData");

    // Redirect to payment success page based on source
    // Use simplified query parameter format: ?pi_... instead of ?payment_intent=pi_...
    const paymentIntentId = paymentIntent?.id || "";

    // Determine thank-you URL based on source
    let thankYouUrl = "/thank-you";
    if (source === "gene-test") {
      thankYouUrl = "/gene-test/thank-you";
    } else if (source === "quiz") {
      thankYouUrl = "/quiz/thank-you";
    }

    if (paymentIntentId) {
      // Use simplified format: ?pi_... instead of ?payment_intent=pi_...
      navigate(`${thankYouUrl}?${paymentIntentId}`);
    } else {
      navigate(thankYouUrl);
    }
  };

  const handleError = (error) => {
    console.error("Payment error:", error);
    setPaymentError(error.message);
  };

  // Determine what products to display
  const hasProducts =
    !!stripeProduct ||
    checkoutData?.products?.length > 0 ||
    (source === "gene-test" && checkoutData);

  const totalItems = stripeProduct
    ? totals.itemCount || 1
    : checkoutData?.products?.reduce((sum, p) => sum + (p.quantity || 1), 0) ||
      (source === "gene-test" ? 1 : 0);

  // Use Stripe totals if available, otherwise fall back to stored totals
  const finalSubtotal =
    totals.subtotal > 0 ? totals.subtotal : initialState.subtotal || 0;
  const finalAmount =
    totals.total > 0 ? totals.total : initialState.amount || 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-[rgba(0,0,0,0.08)]">
        <div className="bg-white px-[60px] py-3">
          <Link to="/" className="flex items-center gap-3 h-[42px]">
            <div className="w-[37.33px] h-[42px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
              >
                <g clipPath="url(#clip0_669_105)">
                  <path
                    d="M22.5332 10.3786L27.368 7.96167C37.8245 14.7422 37.374 15.4438 34.0107 19.248C34.616 16.9108 26.6113 12.3613 22.5332 10.3786Z"
                    fill="black"
                  />
                  <path
                    d="M14.9225 31.4422L10.0876 33.8592C-0.128263 27.4724 0.0816251 26.377 3.44498 22.5729C2.83958 24.91 10.8444 29.4596 14.9225 31.4422Z"
                    fill="black"
                  />
                  <path
                    d="M27.9626 0L30.2596 5.64319C20.3869 10.2842 0.677061 20.74 0.639387 25.5147C0.639423 25.5256 0.639438 25.5365 0.639438 25.5473C0.639321 25.5365 0.639301 25.5256 0.639387 25.5147C0.617414 18.3698 -6.59298 17.2751 27.9626 0Z"
                    fill="black"
                  />
                  <path
                    d="M9.34191 41.9958L7.04492 36.3526C16.9176 31.7117 36.6274 21.2558 36.6651 16.4811C36.6651 16.4702 36.6651 16.4594 36.6651 16.4485C36.6652 16.4593 36.6652 16.4702 36.6651 16.4811C36.6871 23.626 43.8975 24.7208 9.34191 41.9958Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_669_105">
                    <rect width="37.3333" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-gibson font-semibold text-[30px] leading-none text-black">
              OptiGenix
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-[1280px] mx-auto px-4 md:px-8 py-8 gap-20">
        {/* Left Column - Forms */}

        <div className="max-w-[560px]">
          <StripeProvider>
            <div className="flex flex-col gap-6">
              {/* Contact Information */}
              <div className="flex flex-col">
                <h2 className="font-funnel font-semibold !text-[21px] leading-[25.2px] text-[#010907]">
                  Contact Information
                </h2>
                <div className="flex flex-col gap-[14px]">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="border border-[#c7c7c7] rounded-lg px-4 py-[8px] text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="border border-[#c7c7c7] rounded-lg px-4 py-[8px] text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="flex flex-col">
                <h2 className="font-funnel font-semibold !text-[21px] leading-[25.2px] text-[#010907]">
                  Shipping Address
                </h2>
                <div className="flex flex-col gap-[14px]">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="border border-[#c7c7c7] rounded-lg px-4 py-[8px] text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                  />
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Apartment, suite, etc. (optional)"
                    className="border border-[#c7c7c7] rounded-lg px-4 py-[8px] text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                  />
                  <div className="flex gap-[14px]">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="flex-1 border border-[#c7c7c7] rounded-lg px-4 py-[8px] text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                    />
                    <div className="relative flex-1">
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="w-full border border-[#c7c7c7] rounded-lg px-4 py-[8px] pr-10 text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                      />
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#010907] opacity-50 pointer-events-none" />
                    </div>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip code"
                      className="flex-1 border border-[#c7c7c7] rounded-lg px-4 py-[8px] text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full border border-[#c7c7c7] rounded-lg px-4 py-[8px] pr-10 text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none focus:border-[#0D8360]"
                    />
                    <HelpCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#010907] opacity-30" />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <StripeCheckoutForm
                amount={finalAmount}
                onSuccess={handleSuccess}
                onError={handleError}
                formData={formData}
                useShippingAsBilling={useShippingAsBilling}
                setUseShippingAsBilling={setUseShippingAsBilling}
                onCreatePaymentIntent={processPayment}
              />

              {/* Terms and Place Order Button */}
              <div className="flex flex-col gap-5">
                <p className="text-inter text-[14px] text-[#010907] leading-[21px]">
                  By placing this order, you agree to the{" "}
                  <Link to="/terms-and-conditions" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </StripeProvider>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-[574px] bg-[#f7f7f7] sticky top-0 h-screen overflow-y-auto">
          <div className="px-[38px] py-8">
            <div className="max-w-[full]">
              {/* Products List - Dynamic based on source */}
              <div className="mb-6">
                {productId ? (
                  // Both gene test and quiz fetch their specific product from Stripe
                  loadingStripe ? (
                    <div className="py-8 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D8360] mx-auto mb-2"></div>
                      <p className="text-inter text-[14px] text-[rgba(0,0,0,0.56)]">
                        Loading product from Stripe...
                      </p>
                    </div>
                  ) : stripeProduct ? (
                    <div className="space-y-5">
                      <StripeProductDisplay
                        product={stripeProduct}
                        quantity={1}
                        showImage={true}
                        showDescription={true}
                        showPrice={true}
                        showProductId={false}
                        size="md"
                      />
                    </div>
                  ) : (
                    // Fallback: Show product info from localStorage
                    checkoutData && (
                      <div className="space-y-5">
                        <div className="bg-white rounded-lg p-4 border border-[#c7c7c7]">
                          <h3 className="font-funnel font-semibold text-[16px] text-[#010907] mb-2">
                            {checkoutData.productName ||
                              (source === "quiz"
                                ? "Personalized Supplement Pack"
                                : "DNA Test: Unlock Your Genetic Potential")}
                          </h3>
                          {checkoutData.description && (
                            <p className="text-inter text-[14px] text-[rgba(0,0,0,0.56)] mb-3">
                              {checkoutData.description}
                            </p>
                          )}
                          <div className="flex justify-between items-center">
                            <span className="text-inter text-[14px] text-[#010907]">
                              Price
                            </span>
                            <span className="font-inter font-semibold text-[16px] text-[#010907]">
                              $
                              {checkoutData.amount?.toFixed(2) ||
                                initialState.amount?.toFixed(2) ||
                                "0.00"}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-inter text-[14px] text-[rgba(0,0,0,0.56)]">
                      No products found. Please start from the quiz or gene test
                      page.
                    </p>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="flex flex-col gap-4 border-t border-[#c7c7c7] pt-4">
                <div className="flex flex-col gap-[6px]">
                  <div className="flex justify-between items-center">
                    <span className="text-inter text-[14px] text-[#010907]">
                      Subtotal · {hasProducts ? totalItems : 0}{" "}
                      {hasProducts && totalItems === 1 ? "item" : "items"}
                    </span>
                    <span className="text-inter text-[14px] text-[#010907]">
                      ${hasProducts ? finalSubtotal.toFixed(2) : "0.00"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-inter text-[14px] text-[#010907]">
                      Shipping
                    </span>
                    <span className="text-inter text-[14px] text-[rgba(0,0,0,0.56)]">
                      {formData.address ? "Free" : "Enter shipping address"}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-inter font-semibold text-[18px] text-[#010907]">
                    Total
                  </span>
                  <div className="flex gap-2 items-center">
                    <span className="text-inter text-[12px] text-[rgba(0,0,0,0.56)]">
                      USD
                    </span>
                    <span className="font-inter font-semibold text-[18px] text-[#010907]">
                      ${finalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {paymentError && (
        <div className="fixed right-4 bottom-4 z-50 p-4 max-w-md text-sm text-red-700 bg-red-50 rounded-lg border border-red-200">
          {paymentError}
        </div>
      )}
    </div>
  );
};

export default Checkout;
