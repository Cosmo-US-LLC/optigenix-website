import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "@/stripe/config";
import bgImage from "@/assets/images/single_test/dna_test/dna_test_img2.webp";
import cartIcon from "@/assets/images/single_test/gene_test/cart_icon.svg";

const GENE_TEST_PRODUCT_ID = "prod_TZyHo3lxkvrykA";

const StartDNATest = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch gene test product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/products?productIds=${GENE_TEST_PRODUCT_ID}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && data.products && data.products.length > 0) {
          setProduct(data.products[0]);
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        console.error("Error fetching gene test product:", err);
        // Fallback to default data if API fails
        setProduct({
          productId: GENE_TEST_PRODUCT_ID,
          name: "Gene Test: Unlock Your Genetic Potential",
          description: "",
          amount: 200.0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleOrderTest = () => {
    if (!product) {
      console.error("Product not loaded yet");
      return;
    }

    // Store gene test product data in localStorage for checkout
    const geneTestData = {
      source: "gene-test",
      productName: product.name || "Gene Test: Unlock Your Genetic Potential",
      description: product.description || "",
      stripeProductId: product.productId || GENE_TEST_PRODUCT_ID,
      stripePriceId:
        product.prices && product.prices.length > 0
          ? product.prices[0].priceId
          : null,
      amount:
        product.prices && product.prices.length > 0
          ? product.prices[0].amount
          : 200.0,
      images: product.images || [],
    };

    console.log("🧬 Gene Test Product Data:", geneTestData);
    localStorage.setItem("geneTestCheckoutData", JSON.stringify(geneTestData));

    // Navigate to gene test checkout page
    navigate("/gene-test/checkout");
  };
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="relative rounded-[24px] md:rounded-[30px] overflow-hidden">
          {/* Background image with dark overlay */}
          <div className="absolute inset-0">
            <img
              src={bgImage}
              alt="Gene background"
              className="h-[100%]"
              // className="absolute w-[120%] h-[160%] left-[-10%] top-[-30%] max-w-none object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex relative flex-col gap-4 items-center px-6 py-10 text-center md:gap-5 md:py-14 md:px-12">
            <div className="bg-[#FFFFFF05] backdrop-blur-sm border border-white/30 rounded-[24px] p-6 md:p-10 flex flex-col gap-4 items-center">
              <h2 className="!text-[#ffffff]">Get Your Gene Test Kit</h2>
              <div className="flex flex-col gap-1 items-center">
                <div className="text-[#0d8360] text-[48px] md:text-[68px] leading-[56px] md:leading-[72px] font-['Funnel_Display'] font-semibold">
                  $200
                </div>
                <p className="text-white text-[14px] md:text-[16px] leading-[22px] font-['Funnel_Display']">
                  One-time payment. No subscription
                </p>
              </div>

              <button
                className="bg-[#0d8360] hover:bg-[#0b7254] cursor-pointer active:bg-[#095c45] transition-colors text-white rounded-full px-5 md:px-[19px] py-3 md:py-[12px] flex items-center gap-2 font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleOrderTest}
                disabled={loading || !product}
              >
                <img
                  src={cartIcon}
                  alt=""
                  className="w-5 h-5"
                  loading="lazy"
                  aria-hidden="true"
                />
                Order Your Test
              </button>

              <p className="!text-[#ffffff] description  !text-[14px] max-w-[520px]">
                Your results will provide personalized insights to guide your
                training, nutrition, and overall wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartDNATest;
