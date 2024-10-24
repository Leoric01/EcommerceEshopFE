import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import Divider from "@mui/material/Divider";
import PaymentsIcon from "@mui/icons-material/Payments";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [isCanceled, setCancel] = useState(false);
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src={
            "https://www.pngall.com/wp-content/uploads/5/Computer-Processor-PNG-Photo.png"
          }
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">{"some seller busines details info"}</h1>
          <p>
            description description description description description
            description description description description description
            description{" "}
          </p>
          <p>
            <strong>Size:</strong> M
          </p>
        </div>
        <div className="">
          <Button onClick={() => navigate(`/reviews/${2}/create`)}></Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus={"DELIVERED"} />
      </section>

      <div className="border p-5">
        <h1 className="font-bold pb-3"> Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p> {"NICK"} </p>
            <Divider flexItem orientation="vertical" />
            <p>{12098125095821}</p>
          </div>
          <p>
            Country City Street House nmbr ZipCode
            {/* {orders.currentOrder?.shippingAddress.address},{" "}
            {orders.currentOrder?.shippingAddress.city} ,{" "}
            {orders.currentOrder?.shippingAddress.state},{" "}
            {orders.currentOrder?.shippingAddress.pinCode} */}
          </p>
        </div>
      </div>
      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">{500}</span>{" "}
              on this item
            </p>
          </div>
          <p className="font-medium">824.00</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex item-center gap-3">
            <PaymentsIcon />
            <p>Pay on Delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by : </strong> {"Seller's Shop"}{" "}
          </p>
        </div>
        <div className="p-10">
          <Button
            color={!isCanceled ? "error" : "primary"}
            sx={{ py: "0.7rem" }}
            className=""
            variant="contained"
            fullWidth
            onClick={() => setCancel(!isCanceled)}
          >
            {isCanceled ? "order cancelled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
