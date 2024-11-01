import React, { useEffect, useState } from "react";
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
import { useAuthGuard } from "./State/interceptors/AuthGuard";
import ProtectedRoute from "./State/interceptors/ProtectedRoute";
import { userApi } from "./State/interceptors/userApi";
import Auth from "./Customer/Pages/Auth/Auth";
import { TokenService } from "./State/interceptors/TokenService";

function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const tokenService = new TokenService();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await userApi.getUserProfile();
        console.log(
          "User profile fetched successfully:",
          userProfile.data?.data
        );

        const userId = userProfile.data?.data?.id?.toString() || "";
        setUserId(userId);
        localStorage.setItem("id", userId);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    const token = tokenService.getToken();
    if (token) {
      fetchUserProfile();
    }
  }, []);

  useAuthGuard();
  return (
    <ThemeProvider theme={customTheme}>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Auth />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/become-seller" element={<BecomeSeller />} />

          <Route
            path="/account/*"
            element={
              <ProtectedRoute allowedRoles={["ROLE_CUSTOMER"]}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/*"
            element={
              <ProtectedRoute allowedRoles={["ROLE_SELLER"]}>
                <SellerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
