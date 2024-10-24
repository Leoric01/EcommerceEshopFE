import { Route, Routes } from "react-router-dom";
import Dashboard from "../Seller/Pages/Seller Dashboard/Dashboard";
import Products from "../Seller/Pages/Products/Products";
import Profile from "../Seller/Pages/Account/Profile";
import Payment from "../Seller/Pages/Payment/Payment";
import Transaction from "../Seller/Pages/Payment/Transaction";
import AddProducts from "../Seller/Pages/Products/AddProduct";
import Orders from "../Seller/Pages/Orders/Orders";

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default SellerRoutes;
