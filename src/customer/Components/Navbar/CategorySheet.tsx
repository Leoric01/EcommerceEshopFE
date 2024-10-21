import React from "react";
import { MenLevelTwo } from "../../../Data/leveltwo/MenLevelTwo";
import { WomenLevelTwo } from "../../../Data/leveltwo/WomenLevelTwo";
import { ElectronicsLevelTwo } from "../../../Data/leveltwo/ElectronicsLevelTwo";
import { HomeFurnitureLevelTwo } from "../../../Data/leveltwo/HomeFurnitureLevelTwo";
import { MenLevelThree } from "../../../Data/levelthree/MenLevelThree";
import { WomenLevelThree } from "../../../Data/levelthree/WomenLevelThree";
import { ElectronicsLevelThree } from "../../../Data/levelthree/ElectronicsLevelThree";
import { HomeFurnitureLevelThree } from "../../../Data/levelthree/HomeFurnitureLevelThree";
import { Box } from "@mui/material";

const categoryTwo = {
  men: MenLevelTwo,
  women: WomenLevelTwo,
  electronics: ElectronicsLevelTwo,
  home_furniture: HomeFurnitureLevelTwo,
};
const categoryThree = {
  men: MenLevelThree,
  women: WomenLevelThree,
  electronics: ElectronicsLevelThree,
  home_furniture: HomeFurnitureLevelThree,
};

const CategorySheet = () => {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId == parentCategoryId
    );
  };
  return (
    <Box
      sx={{ zIndex: 1 }}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo["men"]?.map((item) => (
          <div>
            <p className="text-primary-custom mb-5 font-semibold">
              {item.name}
            </p>
            <ul className="space-y-3">
              {childCategory(categoryThree["men"], item.categoryId).map(
                (item: any) => (
                  <div>
                    <li className="hover:text-primary-custom cursor-pointer">
                      {item.name}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
