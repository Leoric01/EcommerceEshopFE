import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  return (
    <div className="flex flex-wrap justify-start px-4 lg:px-20 gap-7">
      {[1, 1, 1, 1, 1, 1].map((item) => (
        <ShopByCategoryCard />
      ))}
    </div>
  );
};

export default ShopByCategory;
