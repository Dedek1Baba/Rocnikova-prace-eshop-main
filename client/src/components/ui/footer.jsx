import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../../assets/snith.logo.png";


export default function Footer() {
  return (
    <footer className="bg-primary/10 text-primary py-12 mt-10 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 items-stretch">
          


          <div className="text-center md:text-left flex flex-col justify-between">
            <img src={Logo} alt="Snith Logo" className="w-40 h-auto mx-auto md:mx-0 mb-4 "draggable="false" />
            <p className=" text-sm leading-relaxed">
            They didnt't believe in us. You did! New SNITH. Better products. Follow our socials!
            </p>
          </div>


          <div className="text-center flex flex-col justify-between">
            <h3 className="text-xl font-semibold  uppercase tracking-wide">Navigace</h3>
            <ul className="mt-4 space-y-3 ">
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">Home</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">Information</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">Products</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">X</a></li>
            </ul>
          </div>

      

  
          <div className="text-center flex flex-col justify-between">
            <h3 className="text-xl font-semibold uppercase tracking-wide">About us</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">FAQ</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">Doprava a Platba</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 cursor-pointer">Obchodní podmínky</a></li>
            </ul>
          </div>



          <div className="text-center md:text-right flex flex-col justify-between ">
            <h3 className="text-xl font-semibold  uppercase tracking-wide">Kontakt</h3>
            <p className="mt-1 text-sm ">Malá Strana, 118 00 Praha 1</p>
            <p className="text-sm ">info@snith.cz</p>
            <p className="text-sm ">+420 999 999 999</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-6 ">
              <a href="https://www.facebook.com/" className=" hover:text-secondary transition duration-300 ">
                <Facebook size={28} className="cursor-pointer"/>
              </a>
              <a href="https://www.instagram.com/" className=" hover:text-secondary transition duration-300 ">
                <Instagram size={28} className="cursor-pointer"/>
              </a>
              <a href="https://www.youtube.com/" className=" hover:text-secondary transition duration-300">
                <Youtube size={28} className="cursor-pointer"/>
              </a>
            </div>
          </div>
        </div>

    


        <div className="mt-12 text-center text-sm border-t border-gray-700 pt-6 text-gray-500">
          © {new Date().getFullYear()} Snith Clothing
        </div>
      </div>
    </footer>
  );
}
