import React from "react";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import customTheme from "./theme/customTheme";
import Navbar from "./Customer/Components/Navbar";
import Home from "./Customer/Pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Navbar />
        <Home />
        <h1 className="text-3xl font-bold underline">HASHUBFHASBFHAS</h1>
        <Button variant="contained">TEST</Button>
        <AddShoppingCartIcon />
      </div>
    </ThemeProvider>
  );
}

export default App;
