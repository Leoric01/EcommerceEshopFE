import React, { useState, MouseEvent } from "react";
import { teal } from "@mui/material/colors";
import Close from "@mui/icons-material/Close";
import { Product as ProductInterface } from "../../../Api/models";
import { wishApi } from "../../../State/configAxios/wishApi";
import { useNavigate } from "react-router-dom";

const WishlistProductCard: React.FC<{
  product: ProductInterface;
  refreshWishList: () => Promise<void>;
}> = ({ product, refreshWishList }) => {
  const productId = product.id;
  const navigate = useNavigate();
  const handleIconClick = async (event: MouseEvent) => {
    event.stopPropagation();
    if (productId !== undefined) {
      try {
        await wishApi.addProductToWishList(productId);
        await refreshWishList();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Product ID is undefined");
    }
  };
  const handleCardClick = () => {
    const category = product.category?.categoryId || "unknown-category";
    const title = product.title || "unknown-title";
    navigate(`/product-details/${category}/${title}/${productId}`);
  };
  return (
    <div className="w-60 relative" onClick={handleCardClick}>
      <div className="w-full">
        <img
          className="object-top w-full"
          src={product.image?.[0] || "path/to/fallback-image.jpg"}
          alt={product.title ? `product-${product.title}` : "Product Image"}
        />
      </div>

      <div className="pt-3 space-y-1 rounded-md">
        <div className="space-y">
          <p>{product.title || "Unnamed Product"}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-800">€{product.sellingPrice || "N/A"}</span>
          <span className="text thin-line-through text-gray-400">€{product.maxPrice || "N/A"}</span>
          <span className="text-[#00927c] font-semibold">
            {product.discountPercentage ? `${product.discountPercentage}% off` : ""}
          </span>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <button onClick={handleIconClick}>
          <Close className="cursor-pointer bg-white rounded-full p-1" sx={{ color: teal[500], fontSize: "2rem" }} />
        </button>
      </div>
    </div>
  );
};

export default WishlistProductCard;
