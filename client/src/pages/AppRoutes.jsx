import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import Admin from "./Admin";
import Create from "./ClothingCreateForm";
import Clothing from "./ClothingList";
import Update from "./ClothingUpdateForm";
import ClothingView from "./ClothingView";
import CreatedClothing from "./ClothingCreateForm/CreatedClothing";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/createclothing" element={<Create />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/blogadmin" element={<Admin />} />
          <Route path="/view/:id" element={<ClothingView />} />
          <Route path="/created-clothing/:id" element={<CreatedClothing />} />
          <Route path="/clothing/:id" element={<Clothing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
