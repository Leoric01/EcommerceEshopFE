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
    </div>
  );
};

export default ShopByCategoryCard;
