import React from "react"
import { Truck, 
    RefreshCw, 
    ShieldCheck, 
    HelpCircle, } from 'lucide-react';



export default function vyhody() {
  return (

    <section className=" text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Proč nakupovat u nás?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          



          <div className="flex flex-col items-center">
            <Truck className=" w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Doprava Zdarma</h3>
            <p className="text-gray-400">Doprava zdarma po celém Česku a Slovensku</p>
          </div>

          <div className="flex flex-col items-center">
            <RefreshCw className=" w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Záruka vrácení peněz</h3>
            <p className="text-gray-400">Možnost vrátit zboží do 30 dnů od nákupu</p>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheck className=" w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Bezpečné placení</h3>
            <p className="text-gray-400">Chráníme finanční transakce, prostředky a osobní informace</p>
          </div>

          <div className="flex flex-col items-center">
            <HelpCircle className=" w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">24/7 Live support</h3>
            <p className="text-gray-400">
              Kontaktujte náš zákaznický tým na e-mail: <br />
              <span className="font-bold">support@snith.cz</span>
            </p>
          </div>




        </div>
      </div>
    </section>
  );
}
