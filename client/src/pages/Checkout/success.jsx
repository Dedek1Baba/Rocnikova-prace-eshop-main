import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col justify-center items-center px-6 py-20 text-center">
        <div className="max-w-2xl backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl p-10 ">
          <h1 className="text-4xl font-extrabold text-indigo-500 mb-6">Děkujeme za objednávku!</h1>
          <p className="text-lg text-gray-300 mb-4">
            Vaše platba byla úspěšně vytvořena. 
          </p>
          <p className="text-md text-gray-400 mb-8">
            Pokud máte jakékoli otázky, neváhejte nás kontaktovat na e-mail "snith@gmail.com".
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:bg-gray-300 font-bold py-3 px-6 text-white rounded-xl"
          >
            Zpět na úvodní stránku
          </Button>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
