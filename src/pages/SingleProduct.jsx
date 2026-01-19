import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { categoryData, benefitIcons } from "../data/categoryData.jsx";
import MetaTags from "../components/PageComponents/MetaTags/MetaTags";

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");

  // Find the product across all categories
  const findProduct = () => {
    for (const category of Object.values(categoryData)) {
      const product = category.products.find((p) => p.id === productId);
      if (product) return product;
    }
    return null;
  };

  const product = findProduct();

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-[60px] px-5 text-center">
        <h1 className="font-funnel text-5xl text-[#010907] m-0 mb-4">
          Product Not Found
        </h1>
        <p className="font-inter text-lg text-[rgba(1,9,7,0.75)] m-0 mb-8">
          The product you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/all-category")}
          className="bg-[#0d8360] text-white font-funnel font-semibold text-base py-[14px] px-8 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-[#0a6b50]"
        >
          Browse All Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Navigate to cart page
    navigate("/cart");
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <MetaTags
        title={`${product.title} - Science-Backed Supplement | OptiGenix`}
        description={product.description}
      />
      <div className="bg-white min-h-screen">
        {/* Product Hero Section */}
        <section className="py-[60px] px-5 bg-[#f7f7f7]">
          <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-[60px] items-start">
            <div className="flex flex-col gap-5">
              <div className="w-full h-[600px] md:h-[600px] sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d8360] to-[#042b24]">
                {/* Placeholder for main product image */}
                <div className="w-full h-full flex items-center justify-center text-[120px] text-white/30 font-bold font-funnel">
                  <span>{product.title.charAt(0)}</span>
                </div>
              </div>
              <div className="flex gap-3">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="w-[calc(33.333%-8px)] h-[120px] rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#0d8360] transition-colors duration-300"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#0d8360] to-[#042b24] flex items-center justify-center text-white text-2xl font-semibold">
                      {index}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="font-funnel font-bold text-5xl leading-[56px] text-[#010907] m-0">
                {product.title}
              </h1>
              <p className="font-inter text-lg leading-7 text-[rgba(1,9,7,0.75)] m-0">
                {product.description}
              </p>

              <div>
                <h3 className="font-funnel font-semibold text-xl m-0 mb-3 text-[#010907]">
                  Key Benefits:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#e5e5e5]"
                    >
                      <span className="text-2xl">
                        {benefitIcons[benefit.icon] || "✓"}
                      </span>
                      <span className="font-inter font-medium text-sm text-[#010907]">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-5 border-t border-b border-[#e5e5e5]">
                <div className="font-funnel font-bold text-[40px] text-[#0d8360] m-0 mb-2">
                  ${product.price.toFixed(2)}
                </div>
                <p className="font-inter text-sm text-[rgba(1,9,7,0.6)] m-0">
                  One-time purchase • 30-day supply
                </p>
              </div>

              <div className="flex items-center gap-4">
                <label className="font-funnel font-semibold text-base text-[#010907]">
                  Quantity:
                </label>
                <div className="flex items-center gap-0 border-2 border-[#e5e5e5] rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity === 1}
                    className="w-10 h-10 bg-white border-none cursor-pointer text-xl text-[#010907] hover:bg-[#f7f7f7] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-[60px] h-10 border-none border-l border-r border-[#e5e5e5] text-center font-inter text-base font-semibold"
                  />
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="w-10 h-10 bg-white border-none cursor-pointer text-xl text-[#010907] hover:bg-[#f7f7f7] transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  className="bg-[#0d8360] text-white font-funnel font-semibold text-lg py-4 px-8 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-[#0a6b50]"
                  onClick={handleAddToCart}
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="bg-[#042b24] text-white font-funnel font-semibold text-lg py-4 px-8 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-[#031f1a]">
                  Subscribe & Save 15%
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="flex items-center gap-2 font-inter text-sm text-[#010907]">
                  <span className="text-xl">🔬</span>
                  <span>Science-Backed Formula</span>
                </div>
                <div className="flex items-center gap-2 font-inter text-sm text-[#010907]">
                  <span className="text-xl">🇺🇸</span>
                  <span>Made in USA</span>
                </div>
                <div className="flex items-center gap-2 font-inter text-sm text-[#010907]">
                  <span className="text-xl">✓</span>
                  <span>Third-Party Tested</span>
                </div>
                <div className="flex items-center gap-2 font-inter text-sm text-[#010907]">
                  <span className="text-xl">🌿</span>
                  <span>Natural Ingredients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex gap-2 border-b-2 border-[#e5e5e5] mb-10">
              <button
                className={`bg-transparent border-none py-4 px-6 font-funnel font-semibold text-lg cursor-pointer border-b-[3px] -mb-[2px] transition-all duration-300 ${
                  activeTab === "overview"
                    ? "text-[#0d8360] border-[#0d8360]"
                    : "text-[rgba(1,9,7,0.6)] border-transparent hover:text-[#0d8360]"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`bg-transparent border-none py-4 px-6 font-funnel font-semibold text-lg cursor-pointer border-b-[3px] -mb-[2px] transition-all duration-300 ${
                  activeTab === "ingredients"
                    ? "text-[#0d8360] border-[#0d8360]"
                    : "text-[rgba(1,9,7,0.6)] border-transparent hover:text-[#0d8360]"
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
              <button
                className={`bg-transparent border-none py-4 px-6 font-funnel font-semibold text-lg cursor-pointer border-b-[3px] -mb-[2px] transition-all duration-300 ${
                  activeTab === "how-to-use"
                    ? "text-[#0d8360] border-[#0d8360]"
                    : "text-[rgba(1,9,7,0.6)] border-transparent hover:text-[#0d8360]"
                }`}
                onClick={() => setActiveTab("how-to-use")}
              >
                How to Use
              </button>
              <button
                className={`bg-transparent border-none py-4 px-6 font-funnel font-semibold text-lg cursor-pointer border-b-[3px] -mb-[2px] transition-all duration-300 ${
                  activeTab === "faq"
                    ? "text-[#0d8360] border-[#0d8360]"
                    : "text-[rgba(1,9,7,0.6)] border-transparent hover:text-[#0d8360]"
                }`}
                onClick={() => setActiveTab("faq")}
              >
                FAQ
              </button>
            </div>

            <div className="max-w-[900px]">
              {activeTab === "overview" && (
                <div>
                  <h2 className="font-funnel font-bold text-4xl text-[#010907] m-0 mb-6">
                    About {product.title}
                  </h2>
                  <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0 mb-5">
                    Our {product.title} supplement is scientifically formulated
                    to support your health goals. {product.description}
                  </p>
                  <h3 className="font-funnel font-semibold text-2xl text-[#010907] mt-8 mb-4">
                    Why Choose {product.title}?
                  </h3>
                  <ul className="list-none p-0 my-6">
                    <li className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] pl-8 relative mb-3 before:content-['✓'] before:absolute before:left-0 before:text-[#0d8360] before:font-bold before:text-xl">
                      Clinically researched ingredients at optimal dosages
                    </li>
                    <li className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] pl-8 relative mb-3 before:content-['✓'] before:absolute before:left-0 before:text-[#0d8360] before:font-bold before:text-xl">
                      Third-party tested for purity and potency
                    </li>
                    <li className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] pl-8 relative mb-3 before:content-['✓'] before:absolute before:left-0 before:text-[#0d8360] before:font-bold before:text-xl">
                      No artificial colors, flavors, or preservatives
                    </li>
                    <li className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] pl-8 relative mb-3 before:content-['✓'] before:absolute before:left-0 before:text-[#0d8360] before:font-bold before:text-xl">
                      Manufactured in FDA-registered facilities
                    </li>
                    <li className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] pl-8 relative mb-3 before:content-['✓'] before:absolute before:left-0 before:text-[#0d8360] before:font-bold before:text-xl">
                      Backed by our 60-day money-back guarantee
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "ingredients" && (
                <div>
                  <h2 className="font-funnel font-bold text-4xl text-[#010907] m-0 mb-6">
                    Ingredients
                  </h2>
                  <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] font-medium mb-8">
                    Each serving contains premium, research-backed ingredients:
                  </p>
                  <div className="flex flex-col gap-6 my-8">
                    {product.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="p-5 bg-[#f7f7f7] rounded-xl"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-funnel font-semibold text-xl text-[#010907] m-0">
                            {benefit.text} Complex
                          </h4>
                          <span className="font-inter font-bold text-base text-[#0d8360]">
                            500mg
                          </span>
                        </div>
                        <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                          Supports {benefit.text.toLowerCase()} through
                          scientifically validated pathways.
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="font-inter text-sm leading-6 text-[rgba(1,9,7,0.5)] italic mt-8">
                    * Daily Value not established. Other ingredients: Vegetable
                    cellulose (capsule), rice flour, magnesium stearate.
                  </p>
                </div>
              )}

              {activeTab === "how-to-use" && (
                <div>
                  <h2 className="font-funnel font-bold text-4xl text-[#010907] m-0 mb-6">
                    How to Use
                  </h2>
                  <div className="flex flex-col gap-8 my-8">
                    <div className="flex gap-5 items-start">
                      <span className="w-12 h-12 bg-[#0d8360] text-white rounded-full flex items-center justify-center font-funnel font-bold text-2xl flex-shrink-0">
                        1
                      </span>
                      <div className="flex-1">
                        <h4 className="font-funnel font-semibold text-xl text-[#010907] m-0 mb-2">
                          Dosage
                        </h4>
                        <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                          Take 2 capsules daily with food and water, or as
                          directed by your healthcare professional.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <span className="w-12 h-12 bg-[#0d8360] text-white rounded-full flex items-center justify-center font-funnel font-bold text-2xl flex-shrink-0">
                        2
                      </span>
                      <div className="flex-1">
                        <h4 className="font-funnel font-semibold text-xl text-[#010907] m-0 mb-2">
                          Timing
                        </h4>
                        <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                          For best results, take consistently at the same time
                          each day. Morning or evening both work well.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <span className="w-12 h-12 bg-[#0d8360] text-white rounded-full flex items-center justify-center font-funnel font-bold text-2xl flex-shrink-0">
                        3
                      </span>
                      <div className="flex-1">
                        <h4 className="font-funnel font-semibold text-xl text-[#010907] m-0 mb-2">
                          Duration
                        </h4>
                        <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                          Allow 2-4 weeks for optimal results. Most users
                          experience benefits within the first month of
                          consistent use.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fff9e6] border-l-4 border-[#ffc107] py-4 px-5 rounded-lg font-inter text-sm leading-6 text-[#010907] mt-8">
                    <strong>Important:</strong> Consult your physician before
                    use if you are pregnant, nursing, taking medication, or have
                    a medical condition.
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div>
                  <h2 className="font-funnel font-bold text-4xl text-[#010907] m-0 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-6">
                    <div className="p-6 bg-[#f7f7f7] rounded-xl">
                      <h4 className="font-funnel font-semibold text-lg text-[#010907] m-0 mb-3">
                        How long does one bottle last?
                      </h4>
                      <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                        Each bottle contains a 30-day supply when taken as
                        directed (2 capsules daily).
                      </p>
                    </div>
                    <div className="p-6 bg-[#f7f7f7] rounded-xl">
                      <h4 className="font-funnel font-semibold text-lg text-[#010907] m-0 mb-3">
                        When will I see results?
                      </h4>
                      <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                        Most customers report noticeable improvements within
                        2-4 weeks of consistent use. Individual results may
                        vary.
                      </p>
                    </div>
                    <div className="p-6 bg-[#f7f7f7] rounded-xl">
                      <h4 className="font-funnel font-semibold text-lg text-[#010907] m-0 mb-3">
                        Is this product vegan-friendly?
                      </h4>
                      <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                        Yes! All our supplements use plant-based capsules and
                        contain no animal-derived ingredients.
                      </p>
                    </div>
                    <div className="p-6 bg-[#f7f7f7] rounded-xl">
                      <h4 className="font-funnel font-semibold text-lg text-[#010907] m-0 mb-3">
                        Are there any side effects?
                      </h4>
                      <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                        Our products are generally well-tolerated. However, if
                        you experience any adverse reactions, discontinue use
                        and consult your healthcare provider.
                      </p>
                    </div>
                    <div className="p-6 bg-[#f7f7f7] rounded-xl">
                      <h4 className="font-funnel font-semibold text-lg text-[#010907] m-0 mb-3">
                        Can I take this with other supplements?
                      </h4>
                      <p className="font-inter text-base leading-7 text-[rgba(1,9,7,0.75)] m-0">
                        Yes, this product can typically be combined with other
                        supplements. However, consult your healthcare provider
                        if you're taking medications or have specific health
                        concerns.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 px-5 bg-[#f7f7f7]">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="font-funnel font-bold text-4xl text-center text-[#010907] m-0 mb-3">
              You May Also Like
            </h2>
            <p className="font-inter text-base text-center text-[rgba(1,9,7,0.75)] m-0 mb-12">
              Complete your wellness routine with these complementary products
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <p className="col-span-full text-center py-[60px] text-[rgba(1,9,7,0.5)] italic">
                Related products coming soon...
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
