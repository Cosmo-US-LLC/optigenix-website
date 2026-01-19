import { Link } from "react-router-dom";
import iconUrl from "../assets/images/thank_you/green_icon.webp";
// Using the icon URL from Figma - consider downloading and hosting locally for production
// const iconUrl =
//   "https://www.figma.com/api/mcp/asset/54aed3e4-4e1d-4fa8-ba46-4d1ce46fc090";

const NotFound = () => {
  return (
    <div className="flex relative justify-center items-center px-4 py-8 min-h-screen bg-white">
      <div className="flex flex-col gap-4 md:gap-2 items-center max-w-[800px] w-full">
        {/* 404 with Icon */}
        <div className="flex gap-6 justify-center items-center sm:gap-8">
          <p className="font-funnel font-semibold text-[120px] sm:text-[150px] md:text-[200px] leading-none text-[#010907]">
            4
          </p>
          <div className="h-[72px] w-[64px] sm:h-[90px] sm:w-[80px] md:h-[120px] md:w-[106.667px] shrink-0 flex items-center justify-center">
            <img
              alt="404 Icon"
              className="block object-contain w-full h-full"
              src={iconUrl}
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = "none";
              }}
            />
          </div>
          <p className="font-funnel font-semibold text-[120px] sm:text-[150px] md:text-[200px] leading-none text-[#010907]">
            4
          </p>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col gap-4 sm:gap-6 items-center text-center max-w-[622px] w-full">
          <div className="flex flex-col gap-4">
            <h1 className="font-funnel font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[48px] md:leading-[56px] !text-[#010907]">
              Oops! Page Not Found
            </h1>
            <p className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-[#010907]">
              It seems the page you're looking for doesn't exist. Don't worry,
              you can explore our homepage or check out our latest offerings!
            </p>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="bg-[#0d8360] flex items-center justify-center px-6 sm:px-[24px] py-3 sm:py-[14px] rounded-full hover:bg-[#0a6b4f] transition-colors"
          >
            <span className="font-funnel font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white whitespace-nowrap">
              Back to Home Page
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
