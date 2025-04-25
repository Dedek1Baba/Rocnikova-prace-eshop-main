import React, { useEffect } from "react";
import { Truck, 
    RefreshCw, 
    ShieldCheck, 
    HelpCircle, } from 'lucide-react';
    import AOS from 'aos';
    import 'aos/dist/aos.css';


export default function vyhody() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (

    <section className="text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">Proč nakupovat u nás?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          



        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
            <Truck className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Doprava Zdarma</h3>
            <p className="text-gray-400">Doprava zdarma po celém Česku a Slovensku</p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <RefreshCw className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Záruka vrácení peněz</h3>
            <p className="text-gray-400">Možnost vrátit zboží do 30 dnů od nákupu</p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <ShieldCheck className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Bezpečné placení</h3>
            <p className="text-gray-400">Chráníme finanční transakce, prostředky a osobní informace</p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <HelpCircle className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">24/7 Live support</h3>
            <p className="text-gray-400">
              Kontaktujte náš zákaznický tým na e-mail: <br />
              <span className="font-bold">snith@gmail.com</span>
            </p>
          </div>




        </div>
      </div>
    </section>
  );
}
