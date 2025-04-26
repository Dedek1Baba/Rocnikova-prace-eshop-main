import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ObchodniPodminky() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />


      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
        <div className="max-w-5xl mx-auto mt-12 mb-12 p-6 sm:p-10 md:p-12 backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl border border-white">        <section data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 text-center text-gray-100">Obchodní Podmínky</h1>
          <p className="text-lg text-gray-300 mb-4">
            Všeobecné obchodní podmínky upravují práva a povinnosti mezi prodávajícím a kupujícím.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>Objednávka je závazná po potvrzení e-mailem</li>
            <li>Spotřebitel má právo odstoupit do 14 dnů</li>
            <li>Všechny ceny jsou konečné a včetně DPH</li>
            <li>Provozovatelem je Snith Clothing s.r.o.</li>
          </ul>
        </section>
      </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
