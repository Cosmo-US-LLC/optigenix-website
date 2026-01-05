import { AddressElement } from "@stripe/react-stripe-js";

/**
 * ShippingAddressSection Component
 *
 * Uses Stripe's AddressElement for collecting shipping address
 * Includes address, city, state dropdown, zip code, country, and phone
 *
 * @param {Object} props
 * @param {Function} props.onAddressChange - Handler for address changes from Stripe AddressElement
 * @param {Object} props.errors - Validation errors object
 */
const ShippingAddressSection = ({ onAddressChange, errors = {} }) => {
  const addressElementOptions = {
    mode: "shipping",
    allowedCountries: ["US"],
    // labels: "floating",
    // display: {
    //   name: "never", // Hide the name field completely - start directly with address fields
    // },
    // labels: {
    //   name: "never", // Hide the name field completely - start directly with address fields
    // },
    defaultValues: {
      address: {
        country: "US", // Set default country
        state: "US", // Set default state to force all fields to expand on page load
      },
    },
    fields: {
      phone: "always", // Include phone number in AddressElement - always visible
    },
    blockPoBox: false,
    validation: {
      phone: {
        required: "never", // Make phone optional
      },
    },
  };

  return (
    <div className="flex flex-col">
      <h2 className="font-funnel font-semibold !text-[21px] leading-[25.2px] text-[#010907] mb-[14px]">
        Shipping Address
      </h2>
      <div className="flex flex-col gap-[14px]">
        {/* Stripe AddressElement - includes address, city, state dropdown, zip, country, and phone */}
        <div className="overflow-hidden px-[2px] md:px-0 w-full">
          <AddressElement
            options={addressElementOptions}
            onChange={onAddressChange}
          />
        </div>
        {/* Display validation errors for address fields */}
        {(errors.address || errors.city || errors.state || errors.zipCode) && (
          <div className="flex flex-col gap-1">
            {errors.address && (
              <p className="text-inter text-[12px] text-red-500">
                {errors.address}
              </p>
            )}
            {errors.city && (
              <p className="text-inter text-[12px] text-red-500">
                {errors.city}
              </p>
            )}
            {errors.state && (
              <p className="text-inter text-[12px] text-red-500">
                {errors.state}
              </p>
            )}
            {errors.zipCode && (
              <p className="text-inter text-[12px] text-red-500">
                {errors.zipCode}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingAddressSection;
