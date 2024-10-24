import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme/customTheme";
import Navbar from "./Customer/Components/Navbar/Navbar";
import Home from "./Customer/Pages/Home/Home";
import Product from "./Customer/Pages/Product/Product";
import ProductDetails from "./Customer/Pages/Page Details/ProductDetails";
import Review from "./Customer/Pages/Review/Review";
import Cart from "./Customer/Pages/Cart/Cart";
import Checkout from "./Customer/Pages/Checkout/Checkout";
import Account from "./Customer/Pages/Account/Account";
import { Route, Routes } from "react-router-dom";
import BecomeSeller from "./Customer/Pages/BecomeSeller/BecomeSeller";
import SellerDashboard from "./Seller/Pages/Seller Dashboard/SellerDashboard";
import AdminDashboard from "./Admin/Pages/Dashboard/AdminDashboard";
import { useAppDispatch } from "./State/Store";
import { fetchSellerProfile } from "./State/seller/sellerSlice";
import { useAuthGuard } from "./State/interceptors/AuthGuard";
import ProtectedRoute from "./State/interceptors/ProtectedRoute";

function App() {
  const dispatch=useAppDispatch();

  useEffect(()=>{
    dispatch(fetchSellerProfile(localStorage.getItem("jwt")||""))
  },[dispatch])
  
  useAuthGuard();  
  return (
    <ThemeProvider theme={customTheme}>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          
          <Route path="/account/*" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/seller/*" element={<ProtectedRoute><SellerDashboard /></ProtectedRoute>} />
          <Route path="/admin/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} /> 
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
