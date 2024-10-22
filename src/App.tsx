import React from "react";
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

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
