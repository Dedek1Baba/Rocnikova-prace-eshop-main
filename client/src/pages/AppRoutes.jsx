import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";

import AboutUs from "./Footer/aboutus";
import Faq from "./Footer/faq";
import Store from "./Footer/stone";
import Dis from "./Footer/discounts";
import Sizes from "./Footer/sizes";

import Cart from "./Cart";

import Admin from "./Admin";

import OneP from "./OneP";
import CreateOneP from "./OnePCreateForm";
import UpdateOneP from "./OnePUpdateForm";
import OnePView from "./OnePView";
import OnePList from "./OnePList";
import CreatedOneP from "./OnePCreateForm/CreatedOneP";

import Create from "./ClothingCreateForm";
import Clothing from "./ClothingList";
import MindsetList from "./MindsetList";
import Update from "./ClothingUpdateForm";
import ClothingView from "./ClothingView";
import Product from "./MainView";
import Products from "./MainList/index";
import CreatedClothing from "./ClothingCreateForm/CreatedClothing";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
     
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/stone-store" element={<Store />} />
          <Route path="/discounts" element={<Dis />} />
          <Route path="/sizes" element={<Sizes />} />

          <Route path="/createproduct" element={<CreateOneP />} />
          <Route path="/updateonep/:id" element={<UpdateOneP />} />
          <Route path="/onep/:id" element={<OnePView />} />
          <Route path="/onep" element={<OnePList />} />
          <Route path="/created-onep/:id" element={<CreatedOneP />} />


          <Route path="/admin" element={<Admin />} />
          <Route path="/oneproductpanel" element={<OneP />} />
          <Route path="/createclothing" element={<Create />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/mindset" element={<MindsetList />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/blogadmin" element={<Admin />} />
          <Route path="/view/:id" element={<ClothingView />} />
          <Route path="/created-clothing/:id" element={<CreatedClothing />} />
          <Route path="/clothing/:id" element={<Clothing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
