import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  // Determine grid layout based on number of products
  const getGridClass = () => {
    if (products.length === 1) {
      return "grid justify-center gap-4 w-full" + " grid-cols-1 max-w-[652px] mx-auto";
    } else if (products.length === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-4 w-full";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 gap-4 w-full";
    }
  };

  return (
    <div className="bg-[#f7f7f7] py-20 px-[60px] w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className={getGridClass()}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
