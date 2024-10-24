import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/Pages/Dashboard/AdminDashboard";
import SellersTable from "../Admin/Pages/Sellers/SellersTable";
import Coupon from "../Admin/Pages/Coupon/Coupon";
import AddNewCouponForm from "../Admin/Pages/Coupon/AddNewCouponForm";
import GridTable from "../Admin/Pages/HomePage/GridTable";
import ElectronicTable from "../Admin/Pages/HomePage/ElectronicTable";
import ShopByCategoryTable from "../Admin/Pages/HomePage/ShopByCategoryTable";
import Deal from "../Admin/Pages/HomePage/Deal";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SellersTable />} />
      <Route path="/coupons" element={<Coupon />} />
      <Route path="/add-coupon" element={<AddNewCouponForm />} />
      <Route path="/home-grid" element={<GridTable />} />
      <Route path="/electronics-category" element={<ElectronicTable />} />
      <Route path="/shop-by-category" element={<ShopByCategoryTable />} />
      <Route path="/deals" element={<Deal />} />
    </Routes>
  );
};

export default AdminRoutes;
