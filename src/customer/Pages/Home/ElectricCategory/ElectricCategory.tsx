import React from "react";
import ElectricCategoryCard from "./ElectricCategoryCard";
import { Home as HomeInterface } from "../../../../Api/models";
import { useMediaQuery } from "@mui/material";

interface ElectricCategoryProps {
  homePage: HomeInterface;
}

const ElectricCategory: React.FC<ElectricCategoryProps> = ({ homePage }) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  console.log("Electric Categories:", homePage.electricCategories);
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {homePage.electricCategories?.slice(0, isSmallScreen ? 5 : 10).map((item: any) => (
        <ElectricCategoryCard item={item} />
      ))}
    </div>
  );
};
export default ElectricCategory;
