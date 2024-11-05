import { useState } from "react";
import { Home as HomeInterface } from "../../../../Api/models";

interface TopBrandProps {
  homePage: HomeInterface;
}

const TopBrand: React.FC<TopBrandProps> = ({ homePage }) => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className=" col-span-3 row-span-12  text-white  rounded ">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.grid?.[0]?.image || ""}
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6  text-white rounded">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.grid?.[1]?.image || ""}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.grid?.[2]?.image || ""}
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.grid?.[3]?.image || ""}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.grid?.[4]?.image || ""}
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6  text-white rounded ">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.grid?.[5]?.image || ""}
          alt=""
        />
      </div>

      {/* https://tristenwallace.com/wp-content/uploads/2022/06/wed-7.jpg */}
    </div>
  );
};

export default TopBrand;
