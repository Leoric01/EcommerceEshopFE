import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {
    const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src={"https://www.pngall.com/wp-content/uploads/5/Computer-Processor-PNG-Photo.png"}
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
            <h1 className="font-bold">{"some seller busines details info"}</h1>
            <p>description description description description description description description description description description description </p>
            <p><strong>Size:</strong> M</p>
        </div>
        <div className="">
            <Button onClick={()=> navigate(`/reviews/${2}/create`)}></Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus={"PENDING"} />
      </section>
    </Box>
  );
};

export default OrderDetails;
