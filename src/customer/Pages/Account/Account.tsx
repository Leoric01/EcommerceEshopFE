import Divider from "@mui/material/Divider";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import UserDetails from "./UserDetails";
import Address from "./Address";
import { TokenService } from "../../../State/interceptors/TokenService";
import { Address as AddressInterface } from "../../../Api";
import UserAddressCard from "./UserAddressCard";

const menuCustomer = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tokenService = new TokenService();
  const handleLogout = () => {
    tokenService.clearToken();
    navigate("/");
  };
  const handleClick = (item: any) => {
    if (item.name === "Logout") {
      handleLogout();
    } else {
      navigate(item.path);
    }
  };
  return (
    <div className="px-5 lg:px-32 min-h-screen mt-10">
      <div className="">
        <h1 className="text-xl font-bold pb-5">Nick</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="col-span-1 lg:border-r lg:pr-5 py-5 h-full">
          {menuCustomer.map((item) => (
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
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id/:orderItemId" element={<OrderDetails />} />
            <Route
              path="/addresses"
              element={
                <Address
                  renderAddress={(address: AddressInterface) => (
                    <UserAddressCard
                      key={address.id}
                      addressId={address.id ?? -1}
                      name={address.name ?? "N/A"}
                      street={address.street ?? "N/A"}
                      locality={address.locality ?? "N/A"}
                      zip={address.zip ?? "N/A"}
                      city={address.city ?? "N/A"}
                      country={address.country ?? "N/A"}
                      mobile={address.mobile ?? "N/A"}
                      onDelete={() => {}}
                    />
                  )}
                />
              }
            />{" "}
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Account;
