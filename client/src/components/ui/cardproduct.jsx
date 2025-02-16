import { useState } from "react";
import { Button } from "./button";
import bhoodie from "../../assets/bhoodie.png";
import phoodie from "../../assets/phoodie.png";
import ghoodie from "../../assets/ghoodie.png";
import { ArrowRight } from 'lucide-react';

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
  return (
      <div className=" p-12 text-center text-white">
          <h2 className="text-4xl font-semibold mb-6 uppercase tracking-wide">
            Nejoblíbenější produkty
          </h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {products.map((product, index) => (
              <div key={index} className="text-center">
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
            <a href="/products"className="mt-6 block" >
              <Button className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg hover:bg-gray-300 transition-all rounded-2xl">
                Více produktů <ArrowRight />
              </Button>
              
              </a>
         </div>
  );
}
