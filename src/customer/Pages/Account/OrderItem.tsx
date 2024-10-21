import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import teal from "@mui/material/colors/teal";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="">
          <Avatar sizes="small" sx={{ bg: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div className="">
          <h1 className="font-bold text-primary-custom">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div className="">
          <img
            className="w-[80px]"
            src="https://live.staticflickr.com/7709/17111109088_bc15dcc27a_n.jpg"
            alt="smart watch"
          />
        </div>
        <div className="w-full space-y-2">
          <h1>Smart Electronics</h1>
          <p>
            This sleek and modern smartwatch is designed to keep you connected
            and active l...
          </p>
          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
