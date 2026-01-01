import { Link } from "react-router-dom";
import MetaTags from "../components/PageComponents/MetaTags/MetaTags";

// Background image from Figma
const imgBackground =
  "https://www.figma.com/api/mcp/asset/d128ea5e-27d6-404f-b24f-c908bb25de26";

/**
 * Payment Success Page
 *
 * Shown after successful Stripe Checkout payment
 * Matches Figma design: https://www.figma.com/design/JH0aXTaAHQrEoWdXjDK8EZ/Optigenix-Website---S?node-id=3911-21393
 */
const PaymentSuccess = () => {
  return (
    <>
      <MetaTags
        title="Thank You - OptiGenix"
        description="Your order has been successfully placed. Thank you for your purchase!"
      />
      <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 md:px-[320px]">
        <div className="flex flex-col items-center w-full max-w-[592px]">
          {/* Background Image */}
          <div className="h-[340px] relative rounded-[16px] w-full mb-8">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img
                alt="Thank you"
                className="absolute h-[115.97%] left-0 max-w-none top-[-6.53%] w-full object-cover"
                src={imgBackground}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-6 items-center mb-6 w-full text-center">
            {/* Title */}
            <h1 className="font-funnel font-medium text-[48px] leading-[56px] text-[#010907]">
              Thank You!
            </h1>

            {/* Description */}
            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#010907] max-w-[622px]">
              Your order has been successfully placed. Feel free to browse our
              homepage for more exciting products or check out our latest deals!
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/"
            className="bg-[#0d8360] flex items-center justify-center px-6 py-[14px] rounded-[100px] hover:bg-[#0a6b4f] transition-colors"
          >
            <span className="font-funnel font-semibold text-[16px] leading-[24px] text-white whitespace-nowrap">
              Return to Homepage
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
