import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

import ScrollToTop from '@/components/ui/nahoru';
import css from "../Home/home.module.css"; 

export default function Products() {
  return (
    <>
    <div className={css}></div>

      <Header />
      
      <div
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="space-y-4 text-center">
       
    
        </div>
      </div>

      <Footer />

      <ScrollToTop />
    </>
  );
}
