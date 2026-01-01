import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/images/single_test/single_hero/hero_section_img1.webp";
import heroImagemob from "@/assets/images/single_test/single_hero/mob_hero1.webp";

const SingleTestHero = () => {
  const navigate = useNavigate();

  const handleOrderTest = () => {
    // Store gene test product data in localStorage for checkout
    const geneTestData = {
      source: "gene-test",
      productName: "DNA Test: Unlock Your Genetic Potential",
      description:
        "Easy and effective test to personalize your nutrition, training, and supplements for optimal results.",
      // You can add Stripe product ID here if you have it
      // stripeProductId: "prod_XXXXXXXXXXXXX",
      // stripePriceId: "price_XXXXXXXXXXXXX",
    };

    localStorage.setItem("geneTestCheckoutData", JSON.stringify(geneTestData));

    // Navigate to checkout page
    navigate("/checkout");
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 pointer-events-none max-md:hidden"
        aria-hidden="true"
      >
        <img
          src={heroImage}
          alt=""
          className="object-cover object-center w-full h-full"
          // loading="eager"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        aria-hidden="true"
      >
        <img
          src={heroImagemob}
          alt=""
          className="object-cover object-center w-full h-full"
          // loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-[calc(100vh-6rem)] max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-start py-16 md:py-32 lg:py-[264px]">
        <div className="w-full max-w-[766px] space-y-5 md:pb-18">
          <h1 className="text-[#ffffff]    capitalize">
            Optimize Your Health & Performance with Gene Insights
          </h1>
          <p className="!text-[#fff] description max-w-[657px]">
            Unlock actionable guidance from your genes to improve recovery,
            training, nutrition, and overall wellness. Backed by science.
            HSA/FSA accepted.
          </p>
          <button className="btn_primary" onClick={handleOrderTest}>
            Order Your Test
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleTestHero;
