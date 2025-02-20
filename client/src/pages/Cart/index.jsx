import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';


import ScrollToTop from '@/components/ui/nahoru';
import css from "../Home/home.module.css"; 

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function cart() {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  return (
    <>
    <div className={css}></div>

      <Header />
   
        <div className=" p-12 text-center text-white">

          <h2 className="text-4xl font-semibold mb-6 uppercase tracking-wide" data-aos="fade-up">
            Košík
          </h2>  


        

         </div>
      

      <Footer />

      <ScrollToTop />
    </>
  );
}
