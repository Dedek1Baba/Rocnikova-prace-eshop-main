import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import { MapPin, Navigation, ArrowRight, Phone } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function LocationsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const locations = [
    {
      name: "Praha - Flagship Store",
      address: "Václavské náměstí 123, Praha 1",
      phone: "+420 777 123 456",
      map: "https://www.google.com/maps?q=Václavské+náměstí+123+Praha",
    },
    {
      name: "Brno - Výdejní místo",
      address: "Masarykova 45, Brno",
      phone: "+420 608 987 654",
      map: "https://www.google.com/maps?q=Masarykova+45+Brno",
    },
    {
      name: "Ostrava - Pop-up Store",
      address: "Stodolní 99, Ostrava",
      phone: "+420 605 555 111",
      map: "https://www.google.com/maps?q=Stodolní+99+Ostrava",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto max-w-4xl border backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-12 mt-12 mb-12">
        <section className="text-center mb-10" data-aos="zoom-in">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow text-white">
            Naše Pobočky
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Přijď se podívat naživo! Tady najdeš naše obchody, výdejní místa a pop-upy. Rádi tě uvidíme.
          </p>
        </section>

        <section className="space-y-6 mt-10">
          {locations.map((loc, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex flex-col sm:flex-row justify-between gap-4 bg-black/40 hover:bg-black/60 transition-all rounded-xl px-6 py-5 text-white border border-gray-600 shadow-md hover:shadow-lg"
            >
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <MapPin size={20} />
                  {loc.name}
                </h2>
                <p className="text-gray-300 mt-1">{loc.address}</p>
                <p className="text-gray-400 flex items-center gap-1 mt-1">
                  <Phone size={16} />
                  {loc.phone}
                </p>
              </div>
              <div className="flex items-center justify-end sm:justify-center">
                <a
                  href={loc.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition-all mt-2 sm:mt-0"
                >
                  <Navigation size={18} />
                  Zobrazit na mapě
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
