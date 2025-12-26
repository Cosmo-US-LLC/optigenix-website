import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="bg-[#f7f7f7] py-[80px] w-full">
      <div className="max-w-[1280px] px-[74px] mx-auto">
        {/* Flex layout with gap-[16px] - matches Figma exactly */}
        <div className="flex flex-col gap-[16px] w-full">
          {/* First row */}
          <div className="flex gap-[16px] w-full">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Second row (if more than 2 products) */}
          {products.length > 2 && (
            <div className="flex gap-[16px] w-full">
              {products.slice(2, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
