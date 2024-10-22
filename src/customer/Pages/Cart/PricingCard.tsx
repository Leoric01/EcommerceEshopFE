import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PricingCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    if (location.pathname === "/checkout") {
      navigate("/cart");
    } else if (location.pathname === "/cart") {
      navigate("/checkout");
    }
  };
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>900</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>-90</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>10</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Fee</span>
          <span>Free</span>
        </div>
        <Divider />
        <div className="flex justify-between items-center">
          <span>Total</span>
          <span>800</span>
        </div>
        <div className="">
          <Button
            onClick={handleNavigate}
            variant="contained"
            className="w-full bg-primary-custom"
          >
            {location.pathname === "/checkout" ? "Go to Cart" : "Buy Now"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
