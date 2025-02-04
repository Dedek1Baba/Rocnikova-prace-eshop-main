import React from "react";
import { useState,  } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Search, X } from "lucide-react";
import { User } from 'lucide-react';
import { ShoppingCart } from "lucide-react";
import { Menu } from 'lucide-react';
import Logo from "../../assets/snith.logo.png";

const MenuPages = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Products",
    link: "/#",
  },
  {
    id: 3,
    name: "Information",
    link: "/#",
  },
];

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary/10 shadow-xl shadow-gray-500/80">
        <div className="container flex justify-between py-5  mx-auto items-center px-4">
          <div className="relative flex items-center gap-2">
          <Search className="absolute right-3 text-primary md:w-6 w-5" />
            <Input
              type="text"
              placeholder="Search.."
              className="px-2 py-1 w-[120px] md:w-[200px] transition-all duration-300 rounded-full border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary"
            ></Input> 
          </div>

          <img
            src={Logo}
            alt="logo"
            className="h-16 absolute  left-1/2 transform -translate-x-1/2"
          />

          <div className="hidden md:flex items-center gap-6">
            <ul className="sm:flex hidden items-center gap-4">
              {MenuPages.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-secondary"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

           

            <Button className="ml-2 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <ShoppingCart className="" />
            </Button>

            <Button className="-ml-3 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <User className="" />
            </Button>
            </div>


            <button className="md:hidden bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary duration-200 text-white " 
            onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen && <X className="w-8 h-8"/>}
              {!menuOpen && <Menu className="w-8 h-8"/>}
            </button>
            </div>
            




            {/*Mobilni menu */}

            {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg p-4 absolute w-full left-0">
          <ul className="flex flex-col items-center gap-4">
            {MenuPages.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="block py-2 text-lg hover:text-secondary">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

              <div className="flex justify-center gap-4 mt-4">
            <Button className=" bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <ShoppingCart className="" />
            </Button>

            <Button className=" bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <User className="" />
            </Button>
            </div>
          </div> 
        )}
        </div>
    </>
  );
}
