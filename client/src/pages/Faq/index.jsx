import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import French from "../../assets/frenchterrycotton.jpg";
import Logo from "../../assets/snith.logo.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen ">

      <Header />

      <div className="max-w-7xl border backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl p-16 mt-12 mb-12 mx-6 sm:mx-auto">




        <section data-aos="fade-up" className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-300 mb-6 tracking-wide leading-tight">O značce Snith</h1>
          <p className="text-lg text-white leading-relaxed">
            Snith je moderní streetwearová značka, která spojuje kvalitu, komfort a styl. Naše produkty jsou navrženy pro každodenní nošení, 
            a přitom odrážejí vysoký standard zpracování a inovativního designu. Klademe důraz na materiály, které vydrží, a na detaily, které
            dělají každý kousek unikátním.
          </p>
        </section>



        <section className="flex flex-col md:flex-row items-center gap-8 mb-16" data-aos="fade-up">
          <img
            src={French}
            alt="Výroba tkaniny"
            className="w-full md:w-1/2 rounded-2xl shadow-xl transform transition-all hover:scale-105"
          />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4 text-gray-300">Použité materiály</h2>
            <p className="text-xl text-white mb-6">
              Věříme, že kvalita materiálů je základem pro dlouhou životnost oblečení. Proto používáme pouze prémiové materiály jako <strong>French Terry Cotton</strong>,
              který je známý svou vysokou gramáží (500g) a jemností. Naše produkty nejenže vypadají skvěle, ale také se pohodlně nosí po celý den.
            </p>
            <h3 className="text-3xl font-semibold text-gray-300">Proč French Terry Cotton?</h3>
            <ul className="list-disc ml-6 text-lg text-white mt-2">
              <li>Vysoce odolný a trvanlivý</li>
              <li>Skvělý pro zachování tepla a pohodlí</li>
              <li>Lehký a prodyšný, ideální pro celoroční nošení</li>
            </ul>
          </div>
        </section>




        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-semibold mb-4 text-gray-300">Naše filozofie</h2>
          <p className="text-xl text-white mx-auto max-w-4xl leading-relaxed">
            Naše filozofie je jednoduchá - kvalitní, udržitelné a inovativní oblečení, které respektuje přírodu a zároveň poskytuje maximální komfort. 
            Věříme v dlouhodobou hodnotu, kterou naše produkty přináší našim zákazníkům, a proto klademe důraz na ekologické a etické výrobní procesy.
          </p>
          <div className="mt-6 text-lg ">
            <h3 className="text-2xl font-semibold text-gray-300">Udržitelnost a etika</h3>
            <p className="mt-4 text-white">
              Snažíme se minimalizovat náš ekologický otisk a používáme pouze ekologické materiály, které jsou šetrné k životnímu prostředí.
              Navíc spolupracujeme pouze s výrobci, kteří dodržují přísné etické standardy.
            </p>
          </div>
        </section>



        <section className="flex flex-col md:flex-row items-center gap-8 mb-16" data-aos="fade-up">
          <img
            src={Logo}
            alt="Náš tým"
            className="w-full md:w-1/2 rounded-2xl shadow-xl transform transition-all hover:scale-105"
          />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4 text-gray-300">Náš tým</h2>
            <p className="text-xl text-white">
              Za každým produktem stojí náš talentovaný tým, který se stará o každý detail, od návrhu až po výrobu. Skládáme se z designérů, 
              techniků a výrobců, kteří jsou všichni zapálení pro kvalitu a inovace. Věříme, že týmová práce je klíčem k úspěchu, a proto každý člen
              přináší svou jedinečnou expertízu.
            </p>
          </div>
        </section>




       
        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-semibold mb-4 text-gray-300">Kde nás najdete?</h2>
          <p className="text-xl text-white mx-auto max-w-4xl">
            Naše produkty si můžete zakoupit online na našem e-shopu, kde nabízíme naši limitovanou kolekci. Dále máme soicální síťě jako například Instagram, YouTube a Facebook.
          </p>
        </section>

      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
