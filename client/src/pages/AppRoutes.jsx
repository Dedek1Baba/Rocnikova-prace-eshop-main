import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import CarUpdateForm from "./CarUpdateForm";


export default function AppRoutes() {
  
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/update-car/:id" element={<CarUpdateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
