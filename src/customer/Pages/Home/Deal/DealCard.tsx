import React from "react";

const DealCard = () => {
  return (
    <div className="w-[12rem] cursor-pointer m-1">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top"
        src="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1729461145~exp=1729464745~hmac=9e9b43f79a3d69d779f47c2754acede324214870612f4baa9d592b7361c49b31&w=826"
        alt="Smart Watch"
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Smart Watch</p>
        <p className="text-2xl font-bold">20% off</p>
        <p className="text-balance text-lg">shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
