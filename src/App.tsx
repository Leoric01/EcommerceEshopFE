import React from 'react';
import './App.css';
import {Button} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from './customer/components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <h1 className="text-3xl font-bold underline">HASHUBFHASBFHAS</h1>
            <Button variant="contained">TEST</Button>
            <AddShoppingCartIcon/>
        </div>
    );
}

export default App;