import React from "react";
import { MenLevelTwo } from "../../../Data/leveltwo/MenLevelTwo";
import { WomenLevelTwo } from "../../../Data/leveltwo/WomenLevelTwo";
import { ElectronicsLevelTwo } from "../../../Data/leveltwo/ElectronicsLevelTwo";
import { HomeFurnitureLevelTwo } from "../../../Data/leveltwo/HomeFurnitureLevelTwo";
import { MenLevelThree } from "../../../Data/levelthree/MenLevelThree";
import { WomenLevelThree } from "../../../Data/levelthree/WomenLevelThree";
import { ElectronicsLevelThree } from "../../../Data/levelthree/ElectronicsLevelThree";
import { HomeFurnitureLevelThree } from "../../../Data/levelthree/HomeFurnitureLevelThree";

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
  return (
    <div>
      <h1>HEADER H1</h1>
    </div>
  );
};

export default CategorySheet;
