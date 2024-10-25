import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Product } from "../../../Api";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = item?.image || [];
  const navigate = useNavigate();

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
      <div
        onClick={() =>
          navigate(
            `/product-details/${item.category?.categoryId}/${item.title}/${item.id}`
          )
        }
        className="group px-4 relative"
      >
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
                alt={`picture ${index}`}
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
            <h1>{item.seller?.businessDetails?.businessName}</h1>
            <p>{item.title || "no title"}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-semibold text-gray-800">
              {item.sellingPrice} €
            </span>
            <span className="thin-line-through text-gray-400">
              {item.mrpPrice} €
            </span>
            <span className="text-primary-custom font-semibold">
              {item.discountPercentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
