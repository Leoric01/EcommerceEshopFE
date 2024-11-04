import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sellerOrderApi } from "../../../State/configAxios/sellerOrderApi";
import { paymentApi } from "../../../State/configAxios/paymentApi";

const PaymentSuccess = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const orderIdNumber = Number(orderId);

  useEffect(() => {
    sellerOrderApi.updateOrderStatus(orderIdNumber, "PLACED");
    paymentApi.paymentSuccessHandler(orderId || "", orderId || "");
  }, [orderId]);

  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="bg-gray-200  p-8 w-[90vh] lg:w-[25%] border rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center">
        <h1 className="text-3xl font-semibold">Congratulations! Payment Successful!</h1>
        <h2 className="text-2xl font-semibold">Your order has been successfully placed.</h2>
        <h2 className="text-4xl font-semibold">
          Your order ID is: <span className="text-red-500">{orderId}</span>
        </h2>
        <div className="" onClick={() => navigate("/")}>
          <Button variant="contained" color="primary">
            Continue Shopping...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
