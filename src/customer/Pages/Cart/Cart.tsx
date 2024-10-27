import { useEffect, useState } from "react";
import CartItem from "./CartItemCard";
import { Cart as CartInterface } from "../../../Api/models/cart";
import { Close, LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";
import { cartApi } from "../../../State/configAxios/cartApi";
import { CartItem as CartItemInt } from "../../../Api";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [cart, setCart] = useState<CartInterface | undefined>();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItemInt[]>([]);

  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    setIsCouponValid(!isCouponValid);
  };

  const fetchCart = async () => {
    try {
      const response = await cartApi.findUserCartHandler();
      const cartData = response?.data?.data;
      setCart(cartData);
      console.log("CART FETCHED: ", cart);
    } catch (err) {
      console.error("Failed to fetch cart data:", err);
    }
  };
  const handleItemDeleted = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-40 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-2">
          {Array.from(cart?.cartItems ?? []).map((item: CartItemInt) => (
            <CartItem
              item={item}
              key={item.id}
              onItemDeleted={handleItemDeleted}
            />
          ))}
        </div>
        <div className="col-span-1 text-sm space-y-3">
          <div className="border rounded-md px-5 py-3 space-y-4">
            <div className="flex gap-3 text-sm items-center">
              <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
              <span>Apply Coupons</span>
            </div>
            {isCouponValid ? (
              <div className="flex align-middle justify-between">
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  label="Coupon code"
                  size="small"
                  variant="outlined"
                  value={couponCode}
                />
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span>COUPON Applied</span>
                  <IconButton onClick={handleApplyCoupon} size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <PricingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;