import React from "react";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import customTheme from "./theme/customTheme";
import Navbar from "./Customer/Components/Navbar/Navbar";
import Home from "./Customer/Pages/Home/Home";
import Product from "./Customer/Pages/Product/Product";
import ProductDetails from "./Customer/Pages/Page Details/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
    </ThemeProvider>
  );
}

export default App;
