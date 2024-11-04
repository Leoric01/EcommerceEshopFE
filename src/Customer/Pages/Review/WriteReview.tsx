import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import Grid from "@mui/material/Grid2/Grid2";
import ReviewForm from "./ReviewForm";
import { productApi } from "../../../State/configAxios/productApi";

const WriteReviews = () => {
  const [products, setProducts] = React.useState<any>({});
  const handleFetchProducts = async () => {};
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
    }
  }, [productId]);

  return (
    <div className="p-5 lg:p-20 flex flex-col lg:flex-row gap-10">
      <div className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img className="w-full" src={products.product?.images[0]} alt="" />
        <div>
          <div>
            <p className="font-bold text-xl">
              {" "}
              {products.product?.seller?.businessDetails.businessName}
            </p>
            <p className="text-lg text-gray-600">{products.product?.title}</p>
          </div>

          <div className="price flex items-center gap-3 mt-5 text-lg">
            <span className="font-semibold text-gray-800">
              {" "}
              ₹{products.product?.sellingPrice}
            </span>
            <span className="text thin-line-through text-gray-400 ">
              ₹{products.product?.mrpPrice}
            </span>
            <span className="text-[#00927c] font-semibold">
              {products.product?.discountPercent}% off
            </span>
          </div>
        </div>
      </div>
      <section className="w-full md:w-1/2 lg:w-[70%]">
        <h1 className="font-semibold text-2xl pb-4 text-gray-700">
          Write Your Review & Give Ratings
        </h1>
        <ReviewForm />
      </section>
    </div>
  );
};

export default WriteReviews;
