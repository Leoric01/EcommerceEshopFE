import React, { useState } from "react";
import CartItem from "./CartItem";
import { LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };
  
  const handleApplyCoupon = () => {
    return null;
  }

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-40 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-2">
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="col-span-1 text-sm space-y-3">
          <div className="border rounded-md px-5 py-3 space-y-4">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
              </div>
              <span>Apply Coupons</span>
            </div>
            <div className="flex align-middle justify-between">
              <TextField
                onChange={handleChange}
                id="outlined-basic"
                label="Coupon code"
                size="small"
                variant="outlined"
              />
              <Button size="small" variant="contained" onClick={handleApplyCoupon}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
