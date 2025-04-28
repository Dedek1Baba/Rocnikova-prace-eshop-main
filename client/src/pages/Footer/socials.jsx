import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import { Instagram, Facebook, Youtube, Twitter, Music, ArrowRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function SocialsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const socials = [
    {
      name: "Instagram",
      icon: <Instagram size={26} />,
      href: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: <Facebook size={26} />,
      href: "https://www.facebook.com/",
    },
    {
      name: "YouTube",
      icon: <Youtube size={26} />,
      href: "https://www.youtube.com/",
    },
    
    
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto max-w-4xl border backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-12 mt-12 mb-12">
        <section className="text-center mb-10" data-aos="zoom-in">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow text-white">
             Naše Sociální Sítě 
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Sleduj nás pro novinky, zákulisní obsah, giveawaye a exkluzivní sneak peeks. Jsme tam, kde jsi ty.
          </p>
        </section>

        <section className="space-y-6 mt-10">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
           
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex items-center justify-between bg-black/40 hover:bg-black/60 transition-all rounded-xl px-6 py-4 text-white border border-gray-600 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                {social.icon}
                <span className="text-lg font-medium">{social.name}</span>
              </div>
              <ArrowRight />
            </a>
          ))}
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
