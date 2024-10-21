import Divider from "@mui/material/Divider";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Orders from "./Orders";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account/profile" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: any) => {
    navigate(item.path);
  };
  return (
    <div className="px-5 lg:px-32 min-h-screen mt-10">
      <div className="">
        <h1 className="text-xl font-bold pb-5">Nick</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="col-span-1 lg:border-r lg:pr-5 py-5 h-full">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname ? "bg-slate-400 text-white" : ""
              }
                    py-3 cursor-pointer px-5 hover:text-white hover:bg-primary-custom rounded-md border-b`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          <Orders />
        </section>
      </div>
    </div>
  );
};

export default Account;
