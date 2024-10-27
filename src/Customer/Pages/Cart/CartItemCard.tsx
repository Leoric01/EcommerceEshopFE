import { Close, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { CartItem } from "../../../Api";
import { cartApi } from "../../../State/configAxios/cartApi";

const CartItemCard = ({
  item,
  onItemDeleted,
}: {
  item: CartItem;
  onItemDeleted: (id: number) => void;
}) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const updateCartItemQuantity = async (newQuantity: number) => {
    try {
      if (newQuantity === 0) {
        if (item.id !== undefined) {
          await cartApi.deleteCartItem(item.id);
          onItemDeleted(item.id);
        } else {
          console.error("Item ID is undefined");
        }
      } else {
        const response = await cartApi.updateCartItemHandler({
          cartItemId: item.id,
          quantity: newQuantity,
        });
        console.log("Cart item updated:", response.data);
        setQuantity(newQuantity);
      }
    } catch (err) {
      console.error("Failed to update cart item quantity:", err);
    }
  };

  const handleDeleteItem = async () => {
    updateCartItemQuantity(0);
  };

  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    updateCartItemQuantity(newQuantity);
  };

  const handleSubtractQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      updateCartItemQuantity(newQuantity);
    }
  };
  console.log("ITEM--------", item);
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
            {/* {item?.product?.seller?.name} */}
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
            <Button disabled={quantity <= 0} onClick={handleSubtractQuantity}>
              <Remove />
            </Button>
            <span>{quantity}</span>
            <Button onClick={handleAddQuantity}>
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
        <IconButton onClick={handleDeleteItem}>
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;