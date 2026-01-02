import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "@/stripe/config";
import heroImage from "@/assets/images/single_test/single_hero/hero_section_img1.webp";
import heroImagemob from "@/assets/images/single_test/single_hero/mob_hero1.webp";

// Default product ID for gene test
const DEFAULT_PRODUCT_ID = "prod_TZyHo3lxkvrykA";

const SingleTestHero = ({ productId = DEFAULT_PRODUCT_ID }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch product from backend using the productId prop
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/products?productIds=${productId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }

        const data = await response.json();

        console.log("📦 Product API Response:", data);

        if (data.success && data.products && data.products.length > 0) {
          console.log("✅ Product found:", data.products[0]);
          setProduct(data.products[0]);
        } else {
          console.warn("⚠️ Product not found in response:", data);
          throw new Error("Product not found");
        }
      } catch (err) {
        console.error("Error fetching gene test product:", err);
        // Fallback to default data if API fails
        setProduct({
          productId: productId,
          name: "DNA Test: Unlock Your Genetic Potential",
          description:
            "Easy and effective test to personalize your nutrition, training, and supplements for optimal results.",
        });
      }
    };

    fetchProduct();
  }, [productId]);

  const handleOrderTest = () => {
    if (!product) {
      console.error("Product not loaded yet");
      return;
    }

    // Store gene test product data in localStorage for checkout
    const geneTestData = {
      source: "gene-test",
      productName: product.name || "DNA Test: Unlock Your Genetic Potential",
      description: product.description || "",
      stripeProductId: product.productId || productId,
      stripePriceId:
        product.prices && product.prices.length > 0
          ? product.prices[0].priceId
          : null,
      amount:
        product.prices && product.prices.length > 0
          ? product.prices[0].amount
          : 89.0,
      images: product.images || [],
    };

    console.log("🧬 Gene Test Product Data:", geneTestData);
    console.log("🧬 Product ID being stored:", geneTestData.stripeProductId);

    localStorage.setItem("geneTestCheckoutData", JSON.stringify(geneTestData));

    // Navigate to gene test checkout page
    navigate("/gene-test/checkout");
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
