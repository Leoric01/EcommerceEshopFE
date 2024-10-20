import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3  flex-col justify-center items-center group cursor-pointer ">
      <div className="custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full">
        <img
          className=" rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full "
          src="https://img.freepik.com/free-photo/assortment-with-flowers-gardening-tools_23-2148442411.jpg?t=st=1729463257~exp=1729466857~hmac=65ded55779a35fe419bd8e37d3f2bab7bdb00f105198c4594ba250df8888f4ca&w=1380"
          alt="flowers in pots"
        />
        <h1>Flowers</h1>
      </div>
      {/* <div className="">
        <img
          src="https://img.freepik.com/free-photo/minimalist-kitchen-interior-design_23-2151008728.jpg?t=st=1729463342~exp=1729466942~hmac=e112288bcf001bd93037e42248cfc91693c30ec51e552a35a8cc4d1cb20f45b6&w=740"
          alt="kitchen"
        />
        <h1>Kitchen</h1>
      </div> */}
    </div>
  );
};

export default ShopByCategoryCard;
