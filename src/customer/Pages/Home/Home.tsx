import React, { useState } from "react";
import { ElectricCategory } from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";
import { customerApi } from "../../../State/configAxios/customerApi";
import { homeCategories } from "../../../Data/HomeCategories";

const Home = () => {
  const [homeCategories2, setHomeCategories] = useState([]);

  const fetchHomeCategories = async () => {
    try {
      const response = await customerApi.createHomeCategories(homeCategories);
      const categories = response.data?.data || [];
      setHomeCategories(categories);
      console.log("Successfully fetched home categories:", categories);
    } catch (err) {
      console.error("Failed to fetch home categories:", err);
    }
  };

  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative">
        <ElectricCategory />
        <CategoryGrid />
        <div className="pt-5 lg:pt-10">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-custom pb-5 lg:pb-20 text-center">TODAY'S DEALS</h1>
          <Deal />
        </div>
        <section className="pt-5 lg:pt-10">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-custom pb-5 lg:pb-20 text-center">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>
        <section className="mt-20 lg:px-20 relative h-[270px] lg:h-[550px] object-cover pb-6">
          <img
            className="w-full h-full object-contain"
            src="https://appworks.tw/wp-content/uploads/2014/12/woman-working-in-the-office.jpg"
            alt=""
          />
          <div className="absolute top-1/2 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-start">
            <h1>Sell Your Product</h1>
            <span className="text-lg md:text-2xl">With </span>
            <span className="logo ">ShopAlley</span>
            <div className="pt-6 flex justify-start ">
              <Button className="" startIcon={<Storefront />} variant="contained" size="large">
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
