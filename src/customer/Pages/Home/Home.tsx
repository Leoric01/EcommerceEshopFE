import React from "react";
import { ElectricCategory } from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative">
        <ElectricCategory />
        <CategoryGrid />
        <Deal />
        <div className="pt-5 lg:pt-20">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-custom pb-5 lg:pb-20 text-center">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </div>
      </div>
    </>
  );
};

export default Home;
