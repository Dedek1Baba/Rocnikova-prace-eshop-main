import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../../assets/snith.logo.png";

export default function Footer() {
  return (
    <footer className=" text-white py-12 backdrop-blur-sm bg-opacity-95 border-t-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-12 items-stretch">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <img
              src={Logo}
              alt="Snith Logo"
              className="w-36 h-auto mb-3"
              draggable="false"
            />
            <p className="text-sm leading-relaxed font-semibold max-w-xs">
              They didn't believe in us. You did! New SNITH. Better products. Follow our socials!
            </p>
          </div>

          <div className="text-center md:text-center mb-8 md:mb-0">
            <h3 className="text-xl font-semibold uppercase tracking-wide">
              Navigace
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  O Nás
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Produkty
                </a>
              </li>
              <li>
                <a
                  href="/discounts"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Slevové kódy
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-center mb-8 md:mb-0">
            <h3 className="text-xl font-semibold uppercase tracking-wide">
              INFORMACE
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/socials"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Socials
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/sizes"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Tabulka velikosti
                </a>
              </li>
              <li>
                <a
                  href="/stone-store"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Kamenná pobočka
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-center mb-8 md:mb-0">
            <h3 className="text-xl font-semibold uppercase tracking-wide">
              SLUŽBY{" "}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/shipping-payment"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Doprava a Platba
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Reklamace a vrácení
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Ochrana soukromí
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition duration-300 cursor-pointer"
                >
                  Obchodní podmínky
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right flex flex-col justify-between ">
            <h3 className="text-xl font-semibold  uppercase tracking-wide">
              Kontakt
            </h3>
            <p className="mt-1 text-sm ">Malá Strana, 118 00 Praha 1</p>
           
            <p className="text-sm ">+420 999 999 999</p>

            <div className="m -mb-3">
              <a
                href="mailto:support@snith.cz?subject=Support"
                className="inline-block"
              >
<button className="px-2 py-1 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-secondary hover:text-white transition duration-300 cursor-pointer ">
  Napsat e-mail
</button>
              </a>
            </div>

            <div className="flex justify-center md:justify-end space-x-4 mt-6 ">
              <a
                href="https://www.facebook.com/"
                className=" hover:text-secondary transition duration-300 "
              >
                <Facebook size={28} className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/"
                className=" hover:text-secondary transition duration-300 "
              >
                <Instagram size={28} className="cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/"
                className=" hover:text-secondary transition duration-300"
              >
                <Youtube size={28} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm border-t border-white pt-6 text-white">
          © {new Date().getFullYear()} Snith Clothing
        </div>
      </div>
    </footer>
  );
}
