import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

import bhoodie from "../../assets/bhoodie.png";
import phoodie from "../../assets/phoodie.png";
import ghoodie from "../../assets/ghoodie.png";

import ScrollToTop from '@/components/ui/nahoru';
import css from "../Home/home.module.css"; 

import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: bhoodie,
    link: "#blackhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: phoodie,
    link: "#pinkhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: ghoodie,
    link: "#grayhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: bhoodie,
    link: "#blackhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: phoodie,
    link: "#pinkhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: ghoodie,
    link: "#grayhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: bhoodie,
    link: "#blackhoodie",
  },
  {
    name: "SNITH HOODIE",
    price: "2.000 Kč",
    image: phoodie,
    link: "#pinkhoodie",
  },
];


export default function Products() {

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
            Naše produkty
          </h2>  


          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            {products.map((product, index) => (

              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 200}> 

               <a href={product.link} className="relative w-full max-w-fit mx-auto overflow-hidden rounded-2xl">
                    <img
                      src={product.image} 
                      alt={product.name} 
                      className=" h-auto transition-opacity duration-300 hover:opacity-40  px-0 sm:px-14"
                      draggable="false"
                      style={{ filter: "drop-shadow(0 0 10px white)" }}
                    />  
                    </a>
                 
                  <h3 className="-mt-11 font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-2">{product.price}</p>
          </div>
        ))}
      </div> 
           

         </div>
      

      <Footer />

      <ScrollToTop />
    </>
  );
}
