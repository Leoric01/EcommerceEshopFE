import { Close, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import { IconButton } from "@mui/material";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] border rounded-md"
            src="https://www.goodfreephotos.com/cache/vector-images/officer-in-uniform.png"
            alt="profile face"
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Water Bottle</h1>
          <p className="text-gray-600 font-medium text-sm">Product Category</p>
          <p className="text-gray-400 text-xs">
            <strong> Sold by: </strong>Seller Name
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>quantity : </strong> {quantity}{" "}
            <Divider orientation="vertical" variant="middle" flexItem />
            <strong>Price per piece : 900</strong>
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button
              disabled={quantity <= 0}
              onClick={() => setQuantity(quantity - 1)}
            >
              <Remove />
            </Button>
            <span>{quantity}</span>
            <Button onClick={() => setQuantity(quantity + 1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">900 €</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
