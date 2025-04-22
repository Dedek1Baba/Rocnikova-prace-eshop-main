import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReklamaceVrácení() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto max-w-7xl border backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl p-6 sm:p-12 mt-12 mb-12 text-white">
        <section data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 text-center text-gray-100">Reklamace a Vrácení</h1>
          <p className="text-lg text-gray-300 mb-4">
            Pokud nejste spokojeni s produktem, nabízíme možnost vrácení nebo výměny do 14 dnů od doručení.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>Zboží musí být nenošené a v původním obalu</li>
            <li>Vyplňte reklamační formulář</li>
            <li>Zašlete balík na naši adresu (viz sekce Kontakt)</li>
          </ul>

          <p className="mt-6 text-gray-300">
            Reklamace jsou vyřizovány bez zbytečného odkladu, nejpozději do 30 dnů.
          </p>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
