import React, { useEffect } from "react";
import { Button } from "./button";
import bhoodie from "../../assets/bhoodie.png";
import phoodie from "../../assets/phoodie.png";
import ghoodie from "../../assets/ghoodie.png";
import { ArrowRight } from 'lucide-react';
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
];

export default function cardproduct() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
      <div className=" p-12 text-center text-white">
          <h2 className="text-4xl font-semibold mb-6 uppercase tracking-wide" data-aos="fade-up">
            Nejoblíbenější produkty
          </h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {products.map((product, index) => (
              <div key={index} className="text-center w-full max-w-sm mx-auto" data-aos="fade-up" data-aos-delay={index * 200}> 
               <a href={product.link} className="relative w-full overflow-hidden rounded-2xl">

                
                    <img
                      src={product.image} 
                      alt={product.name} 
                      className=" h-auto transition-opacity duration-300 hover:opacity-40 w-full"
                      draggable="false"
                      style={{ filter: "drop-shadow(0 0 10px white)" }}
                    />  
                    </a>
                 
                  <h3 className="-mt-4 font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-1">{product.price}</p>
          </div>
        ))}
      </div> 
            <a href="/products"className="mt-6 block" >
              <Button className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg transition-all rounded-3xl" data-aos="fade-up">
                Více produktů <ArrowRight />
              </Button>
              
              </a>
         </div>
  );
}
