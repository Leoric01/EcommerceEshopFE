import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

interface Product {
  id: number; // Overall ID of the product
  title: string; // Title of the product
  categoryId: string; // Category ID (e.g., level 3)
  parentCategoryName: string | null; // Name of the parent category
  parentCategoryId: string | null; // ID of the parent category
  level: number; // Level of the category
  image: string[]; // Array of image URLs
  sellingPrice: number; // Selling price of the product
  mrpPrice: number; // MRP price of the product
  discountPercentage: number; // Discount percentage
}

const images = [
  "https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg?t=st=1729478055~exp=1729481655~hmac=f0efdd73bcd8f88d201118f27be61ef38b8641f78b38fa9fbd06f43f64e24e1a&w=740",
  "https://img.freepik.com/free-photo/shirt_1203-8184.jpg?t=st=1729478136~exp=1729481736~hmac=acc00160a8b98b2ed5bdcf63aa58c92294ef165fb69a9c81157199367758d379&w=826",
  "https://img.freepik.com/free-photo/men-shirt-clothing_1203-8358.jpg?t=st=1729478108~exp=1729481708~hmac=cf627db983dedf0889aea1d50f283aff3d4e2ac94d00fc1dc2243d89ea3445e1&w=826",
];

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = product.image || [];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isHovered && images.length > 0) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1500);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, images.length]);

  return (
    <div>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.length > 0 ? (
            images.map((item, index) => (
              <img
                key={index}
                className="card-media object-top"
                src={item}
                alt={product.title}
                style={{
                  transform: `translateX(${(index - currentImage) * 100}%)`,
                }}
              />
            ))
          ) : (
            <div className="no-image">No images available</div>
          )}
          {isHovered && images.length > 0 && (
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
          <div className="name">
            <h1>{product.title}</h1>
            <p>{product.parentCategoryName}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-semibold text-gray-800">
              {product.sellingPrice} €
            </span>
            <span className="thin-line-through text-gray-400">
              {product.mrpPrice} €
            </span>
            <span className="text-primary-custom font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
