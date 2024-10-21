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

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="">
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
