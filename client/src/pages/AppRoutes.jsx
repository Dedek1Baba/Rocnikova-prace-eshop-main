import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import Products from "./Products";
import AboutUs from "./AboutUs";
import CarView from "./CarView";
import CarUpdateForm from "./CarUpdateForm";


export default function AppRoutes() {
  
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/car/:id" element={<CarView/>}/>
                <Route path="/update-car/:id" element={<CarUpdateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
