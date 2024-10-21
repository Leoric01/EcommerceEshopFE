import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-12 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%] lg:max-w-[500px] ">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="bottle"
            />
          </div>
        </section>
        <section className="justify-items-start w-full">
          <h1 className="font-bold text-lg text-primary-custom">
            Seller Property
          </h1>
          <p className="text-gray-500 font-semibold">product general name</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "23px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>220 Ratings</span>
          </div>
          <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-semibold text-gray-800">400 €</span>
            <span className="line-through text-gray-400">999 €</span>
            <span className="text-primary-custom font-semibold">60%</span>
          </div>
          <p>Inclusive of all taxes. Free Shipping above 200</p>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center w-full gap-5">
            <Button
              fullWidth
              sx={{ py: "1rem" }}
              startIcon={<AddShoppingCart />}
              variant="contained"
            >
              Add To Bag
            </Button>
            <Button
              fullWidth
              sx={{ py: "1rem" }}
              startIcon={<FavoriteBorder />}
              variant="outlined"
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p className="text-sm text-left">
              Description of product Description of product Description of
              product Description of product Description of product Description
              of product Description of product Description of product
              Description of product Description of product
            </p>
          </div>
          <div className="mt-6 w-full">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
