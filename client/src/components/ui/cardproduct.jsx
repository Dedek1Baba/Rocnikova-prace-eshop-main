import { Card, CardContent } from "./card";
import { Button } from "./button";
import bhoodie from "../../assets/bhoodie.png";
import phoodie from "../../assets/phoodie.png";
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "SNITH HOODIE - BLACK",
    price: "2.000 Kč",
    image: bhoodie,
    link: "#blackhoodie",
  },
  {
    name: "SNITH HOODIE - PINK",
    price: "2.000 Kč",
    image: phoodie,
    link: "#pinkhoodie",
  },
  {
    name: "SNITH HOODIE - GRAY",
    price: "2.000 Kč",
    image: bhoodie,
    link: "#flareddenim",
  },
];

export default function cardproduct() {
  return (
      <div className="bg-black p-8 text-center text-white">
          <h2 className="text-4xl font-semibold mb-6 uppercase tracking-wide">
            Naše produkty
          </h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {products.map((product, index) => (
              <div key={index} className="text-center">
              
                  <div className="relative w-full max-w-fit mx-auto overflow-hidden rounded-2xl">
                    <img
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto transition-opacity duration-300 hover:opacity-40"
                      draggable="false"
                      style={{ filter: "drop-shadow(0 0 10px white)" }}
                    />  
                  </div>
                  <h3 className="mt-4 font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-2">{product.price}</p>
                  <a href={product.link} className=" ">
                    <Button className="bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary duration-200 text-white font-bold mt-2 px-4 py-2 rounded-full">
                      Zobrazit produkt
                    </Button>
                    </a>
          </div>
        ))}
      </div>
            <a href="#products"className="mt-6 block" >
              <Button className="bg-gradient-to-br from-primary to-secondary hover:text-secondary font-bold py-3 px-4 shadow-lg hover:bg-gray-300 transition-all rounded-2xl">
                Více produktů <ArrowRight />
              </Button>
              </a>
         </div>
  );
}
