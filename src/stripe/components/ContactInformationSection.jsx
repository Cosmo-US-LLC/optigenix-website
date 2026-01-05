/**
 * ContactInformationSection Component
 *
 * Stripe-styled contact information form section
 * Collects full name and email address with validation
 *
 * @param {Object} props
 * @param {Object} props.formData - Form data containing fullName and email
 * @param {Function} props.onInputChange - Handler for input changes
 * @param {Object} props.errors - Validation errors object
 * @param {Function} props.onBlur - Handler for blur events (for validation)
 */
const ContactInformationSection = ({
  formData,
  onInputChange,
  errors = {},
  onBlur,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-funnel font-semibold !text-[21px] leading-[25.2px] text-[#010907] mb-[14px]">
        Contact Information
      </h2>
      <div className="flex flex-col gap-[14px]">
        {/* Name field - styled to match Stripe AddressElement */}
        {/* <div className="flex flex-col gap-1">
          <div
            className={`border rounded-lg px-4 py-[8px] bg-white h-[44px] flex items-center ${
              errors.fullName ? "border-red-500" : "border-[#c7c7c7]"
            }`}
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onInputChange}
              onBlur={onBlur}
              placeholder="Full Name *"
              required
              className="w-full text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none bg-transparent"
            />
          </div>
          {errors.fullName && (
            <p className="text-inter text-[12px] text-red-500">
              {errors.fullName}
            </p>
          )}
        </div> */}

        {/* Email field - styled to match Stripe AddressElement */}
        <div className="flex flex-col gap-1">
          <div
            className={`border rounded-lg px-4 py-[8px] bg-white h-[44px] flex items-center ${
              errors.email ? "border-red-500" : "border-[#c7c7c7]"
            }`}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              onBlur={onBlur}
              placeholder="Email Address *"
              required
              className="w-full text-inter text-[14px] text-[#010907] placeholder:opacity-50 focus:outline-none bg-transparent"
            />
          </div>
          {errors.email && (
            <p className="text-inter text-[12px] text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInformationSection;
