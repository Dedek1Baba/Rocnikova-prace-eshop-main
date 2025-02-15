import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import Mainpage from "@/components/ui/Mainpage";
import Vyhody from '@/components/ui/vyhody';
import ScrollToTop from '@/components/ui/nahoru';
import CardProduct from "@/components/ui/cardproduct";
import css from "./home.module.css"; 

export default function Home() {
  return (
    <>
    <div className={css}></div>

      <Header />
      
      <div
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="space-y-4 text-center">
       
          <Mainpage />
          <CardProduct />
          <Vyhody />
        </div>
      </div>

      <Footer />

      <ScrollToTop />
    </>
  );
}
