import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { benefitIcons } from "../../../data/categoryData.jsx";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
    // Navigate to cart page
    navigate("/cart");
  };

  const handleLearnMore = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-2xl p-2 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
      <div className="w-full h-[452px] rounded-lg relative overflow-hidden bg-gradient-to-br from-[#0d8360] to-[#042b24]">
        {/* Placeholder for product image */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[120px] font-bold text-white/30 font-funnel">
            {product.title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-funnel font-semibold text-xl leading-6 text-[#010907] m-0">
          {product.title}
        </h3>

        <div className="flex flex-col gap-[10px]">
          <p className="font-inter font-normal text-sm leading-5 text-[#010907] m-0">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <span className="text-[17px] flex items-center justify-center">
                  {benefitIcons[benefit.icon] || "•"}
                </span>
                <span className="font-inter font-medium text-xs leading-5 text-[#010907] whitespace-nowrap">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          <p className="font-funnel font-bold text-xl leading-6 text-[#010907] m-0">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="bg-[#0d8360] text-[#f8fffd] font-funnel font-semibold text-base leading-5 py-3 px-6 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-[#0a6b50]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-transparent text-[#010907] font-funnel font-semibold text-base leading-5 border-none cursor-pointer p-0 underline transition-colors duration-300 hover:text-[#0d8360]"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
