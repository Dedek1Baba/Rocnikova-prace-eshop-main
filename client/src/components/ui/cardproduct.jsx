import { Card, CardContent } from "./card";
import { Button } from "./button";
import bhoodie from "../../assets/bhoodie.png";
import phoodie from "../../assets/phoodie.png";

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
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <Card className="bg-black border-4 border-white rounded-3xl p-6 px-2 shadow-2xl">
          <h2 className="text-4xl font-semibold mb-8 uppercase tracking-wide">
            Naše produkty
          </h2>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
            {products.map((product) => (
              <Card className="bg-primary rounded-xl p-3 shadow-lg hover:scale-105 transition-transform duration-300 mx-auto">
                <CardContent className="flex flex-col items-center">

                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="relative z-10 rounded-xl"
                      draggable="false"
                      style={{ filter: "drop-shadow(0 0 10px white)" }}
                    />
                    <div className="absolute inset-0"></div>
                  </div>
                  <h3 className="text-lg font-semibold mt-3 text-gray-100">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-2 text-md">{product.price}</p>
                  <a href={product.link} className="block w-full">
                    <Button className="bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary duration-200 text-white font-bold py-2 px-4 rounded-full">
                      Zobrazit produkt
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>


          <div className="mt-8">
            <a href="#products">
              <Button className="bg-gradient-to-br from-primary to-secondary hover:text-secondary font-bold py-3 px-6 shadow-lg hover:bg-gray-300 transition-all rounded-full">
                Více produktů
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
