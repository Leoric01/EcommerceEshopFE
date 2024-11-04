import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate } from "react-router-dom";
import { orderApi } from "../../../State/configAxios/orderApi";
interface PricingCardProps {
  selectedAddressId?: number;
}
const PricingCard: React.FC<PricingCardProps> = ({ selectedAddressId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleCreateOrder = async () => {
    console.log("Selected Address ID: ", selectedAddressId);
    if (selectedAddressId === -1) {
      console.error("No address found");
      return;
    }
    try {
      const response = await orderApi.createOrder(selectedAddressId!, "STRIPE");
      console.log("API Response On Order Creation: ", response);
      const paymentLinkUrl = response.data.payment_link_url;
      if (paymentLinkUrl) {
        window.location.href = paymentLinkUrl;
      }
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };
  const handleNavigate = () => {
    if (location.pathname === "/checkout") {
      handleCreateOrder();
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
