import { CartItem } from "../Api";
export const sumCartItemSellingPrice = (cartItems: CartItem[]): number => {
  return cartItems.reduce((acc, item) => {
    return (item?.sellingPrice ?? 0) * (item?.quantity ?? 1) + acc;
  }, 0);
};

export const sumCartItemMrpPrice = (items: CartItem[]): number => {
  return items.reduce((acc, item) => {
    return (item?.mrpPrice ?? 0) * (item?.quantity ?? 1) + acc;
  }, 0);
};
