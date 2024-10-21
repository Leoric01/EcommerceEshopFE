import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg?t=st=1729478055~exp=1729481655~hmac=f0efdd73bcd8f88d201118f27be61ef38b8641f78b38fa9fbd06f43f64e24e1a&w=740",
  "https://img.freepik.com/free-photo/shirt_1203-8184.jpg?t=st=1729478136~exp=1729481736~hmac=acc00160a8b98b2ed5bdcf63aa58c92294ef165fb69a9c81157199367758d379&w=826",
  "https://img.freepik.com/free-photo/men-shirt-clothing_1203-8358.jpg?t=st=1729478108~exp=1729481708~hmac=cf627db983dedf0889aea1d50f283aff3d4e2ac94d00fc1dc2243d89ea3445e1&w=826",
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1500);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}
          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          )}
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

export default ProductCard;
