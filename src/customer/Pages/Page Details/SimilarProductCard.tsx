import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src={
              "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="similar product"
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md ">
          <div className="name ">
            <h1>Property</h1>
            <p>Blue Shirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-semibold text-gray-800">400 €</span>
            <span className="thin-line-through text-gray-400">999 €</span>
            <span className="text-primary-custom font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
