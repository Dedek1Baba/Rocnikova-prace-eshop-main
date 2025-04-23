import React, { useEffect, useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";
import { Instagram, Facebook, Youtube } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function MindsetPage() {
  const [formData, setFormData] = useState({ email: "" });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Děkujeme za připojení! 🎉");
    setFormData({ email: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto max-w-6xl border rounded-3xl p-6 md:p-12 mt-12 mb-12 backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)]" data-aos="fade-up">
        <section className="text-center mb-16" data-aos="zoom-in">
          <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg text-gray-100">
            Mindset je klíč
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            Tvůj přístup určuje tvůj směr. Mindset není jen o myšlení, je to styl života. Se správnou mentalitou neexistují překážky, jen výzvy.
          </p>
        </section>

        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-gray-300 mb-6">
            Posilni svůj mindset
          </h2>
          <p className="text-xl text-white">
            "Tvá mentalita je tvá největší síla. Když věříš ve své schopnosti,
            žádná překážka není dost silná, aby tě zastavila."
          </p>
        </section>

        <section className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-3xl font-semibold text-gray-300">
            Chcete na náš Discord + slevu až 20%?
          </h3>
          <p className="mt-4 text-lg text-white">
            Zanech svůj e-mail a dostaneš pozvánku a promo kód.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center mt-6 gap-2"
          >
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="snith@gmail.com"
              className="px-2 py-1 w-[220px] md:w-[300px] transition-all duration-300 rounded-xl border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary cursor-text text-black"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg transition-all rounded-xl text-white"
            >
              Poslat
            </Button>
          </form>
        </section>

        <section className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-semibold mb-4 text-gray-300">Kde nás najdete?</h2>
          <p className="text-xl text-white mx-auto max-w-4xl">
            Naše produkty si můžete zakoupit online na našem e-shopu, kde nabízíme naši limitovanou kolekci. Dále máme sociální sítě jako například Instagram, YouTube a Facebook.
          </p>
        </section>
        <section className="text-center" data-aos="fade-up">
          <div className="flex justify-center space-x-4 mt-6 text-white">
            <a href="https://www.facebook.com/" className="hover:text-secondary transition duration-300">
              <Facebook size={28} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-secondary transition duration-300">
              <Instagram size={28} className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/" className="hover:text-secondary transition duration-300">
              <Youtube size={28} className="cursor-pointer" />
            </a>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />

      <Toaster
        position="bottom-right"
        theme="light"
        richColors
        className="bg-black text-white fixed bottom-5 right-5 z-50"
      />
    </div>
  );
}
