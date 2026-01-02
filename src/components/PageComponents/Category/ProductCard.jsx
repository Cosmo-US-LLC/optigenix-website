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
    <div className="bg-white rounded-[16px] p-[8px] flex flex-col gap-[8px] flex-[1_0_0]">
      {/* Image - 452px height, 8px border radius, object-cover */}
      <div className="h-[452px] rounded-[8px] relative overflow-hidden w-full">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content section - 16px padding, 12px gap */}
      <div className="p-[16px] flex flex-col gap-[12px] w-full">
        {/* Title - Funnel Display SemiBold, 20px, line-height 24px */}
        <h3 className="font-funnel font-semibold text-[20px] leading-[24px] text-[#010907] m-0">
          {product.title}
        </h3>

        {/* Description & Benefits & Price container */}
        <div className="flex flex-col gap-[10px] w-full">
          {/* Description - Inter Regular, 14px, line-height 20px */}
          <p className="font-inter font-normal text-[14px] leading-[20px] text-[#010907] m-0">
            {product.description}
          </p>

          {/* Benefits (UPS) - flex wrap, 16px gap */}
          <div className="flex flex-wrap gap-[16px] items-center w-full">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                {/* Icon - 17px size */}
                <div className="w-[17px] h-[17px] flex items-center justify-center shrink-0">
                  {benefitIcons[benefit.icon] || "•"}
                </div>
                {/* Text - Inter Medium, 12px, line-height 20px */}
                <span className="font-inter font-medium text-[12px] leading-[20px] text-[#010907] whitespace-nowrap">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* Price - Funnel Display Bold, 20px, line-height 24px */}
          <p className="font-funnel font-bold text-[20px] leading-[24px] text-[#010907] m-0">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Buttons - 16px gap */}
        <div className="flex gap-[16px] items-center w-full">
          {/* Add to Cart button - 24px horizontal, 12px vertical padding */}
          <button
            className="bg-[#0d8360] text-[#f8fffd] font-funnel font-semibold text-[16px] leading-[20px] px-[24px] py-[12px] rounded-[100px] border-none cursor-pointer transition-colors duration-300 hover:bg-[#0a6b50]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          {/* Learn More link - no underline */}
          <button
            className="bg-transparent text-[#010907] font-funnel font-semibold text-[16px] leading-[20px] border-none cursor-pointer p-0 transition-colors duration-300 hover:text-[#0d8360]"
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
