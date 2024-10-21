import React from "react";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import customTheme from "./theme/customTheme";
import Navbar from "./Customer/Components/Navbar/Navbar";
import Home from "./Customer/Pages/Home/Home";
import Product from "./Customer/Pages/Product/Product";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
