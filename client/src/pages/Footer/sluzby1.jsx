import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DopravaPlatba() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
        <div className="max-w-5xl mx-auto mt-12 mb-12 p-6 sm:p-10 md:p-12 backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl border border-white">
        <section data-aos="fade-up ">
          <h1 className="text-5xl font-bold mb-6 text-center text-gray-100">Doprava a Platba</h1>
          <p className="text-lg text-gray-300 mb-4">
            Nabízíme rychlé a spolehlivé způsoby dopravy po celé České republice i na Slovensko. 
          </p>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>Doručení kurýrem (1–3 pracovní dny)</li>
            <li>Zásilkovna (1–3 pracovní dny)</li>
            <li>Možnost osobního odběru</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 text-gray-300">Možnosti platby</h2>
          <ul className="list-disc ml-6 space-y-2 text-white mt-2">
            <li>Online platba kartou</li>
            <li>Apple Pay / Google Pay</li>
            <li>Bankovní převod</li>
            <li>Dobírka (+49 Kč)</li>
          </ul>
        </section>
      </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
