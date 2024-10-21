import React from "react";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://images.pexels.com/photos/28981974/pexels-photo-28981974/free-photo-of-sheida-bio-peeling-mask-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="comercial lotion cream"
        />
        <div className="">
          <div className="">
            <p className="font-bold text-xl">Derma Shop</p>
            <p className="text-lg text-gray-600">Womens facial cream</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
