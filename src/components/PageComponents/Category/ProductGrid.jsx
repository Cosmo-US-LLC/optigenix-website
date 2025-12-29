import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="bg-[#f7f7f7] py-[60px] md:py-[80px] w-full">
      <div className="max-w-[1280px] px-4 md:px-8 lg:px-[74px] mx-auto">
        {/* Responsive Grid: 1 column on mobile, 2 columns on tablet and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
