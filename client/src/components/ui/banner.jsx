import React, { useEffect } from "react";
import Logo from "../../assets/snith.logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex items-center justify-center pt-[50px] pb-[80px] px-4 md:px-12">

      <div className="container max-w-6xl border rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center backdrop-blur-sm" data-aos="fade-up">

        <div className="md:w-1/2 flex justify-center relative " data-aos="fade-up">

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full -z-10"></div>
         
          <img
            src={Logo}
            alt="Snith Logo"
            className="max-w-[400px] w-full rounded-xl shadow-xl"
            draggable="false"
          />
      
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-left" data-aos="fade-up">

         
          <h1 className="text-5xl font-bold text-white mb-4">O SNITH</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Zaměřujeme se na výrobu vysoce kvalitního profesionálního oblečení, které je navrženo pro maximální výkon a pohodlí. Používáme pouze ty nejlepší materiály, jako je French Terry Cotton, která je známá svou jemností a odolností. <br />
            Naše mikiny a oblečení jsou vyráběny podle nejvyšších standardů, přičemž některé kousky váží až 550 GSM, což zajišťuje prémiový pocit a dlouhou životnost.
          </p>

          <a href="/aboutus">
            <button className="mt-6 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary text-white px-6 py-3 rounded-full font-semibold shadow-md">
              Více o SNITH
            </button>
          </a>

        </div>
      </div>
    </div>
  );
}
