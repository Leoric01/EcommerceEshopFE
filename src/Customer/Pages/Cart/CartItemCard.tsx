import { Close, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { CartItem } from "../../../Api";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] border rounded-md"
            src={item?.product?.image?.[0] ?? ""}
            alt={item?.product?.category?.categoryId ?? "Product Image"}
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            {item.product?.seller?.name}
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            {item?.product?.category?.categoryId}
          </p>
          <p className="text-gray-400 text-xs">
            <strong> Sold by: </strong>
            {item?.product?.seller?.businessDetails?.businessName}
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>quantity : </strong> {quantity}
            <Divider orientation="vertical" variant="middle" flexItem />
            <strong>Price per piece : {item?.product?.sellingPrice} €</strong>
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
          <p className="text-gray-700 font-medium">
            {(item?.product?.sellingPrice ?? 0) * quantity} €
          </p>
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

export default CartItemCard;
