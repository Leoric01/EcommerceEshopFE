import React from "react";

const ElectricCategoryCard = () => {
  return (
    <div className="flex mx-3 gap-2 flex-col justify-between">
      <div className="item-center">
        <img
          className="object-contain w-100% h-10"
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="laptop"
        />
        <h2 className="font-semibold text-sm">Laptop</h2>
      </div>
    </div>
  );
};

export default ElectricCategoryCard;
