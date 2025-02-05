import React from "react";
import { useState,  } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Search, X, ShoppingCart,User,Menu } from "lucide-react";
import Logo from "../../assets/snith.logo.png";
import classNames from "classnames";

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
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary/10 shadow-xl shadow-gray-500/80">
        <div className="container flex justify-between py-5  mx-auto items-center px-4 ">
          <div className="relative flex items-center gap-2">
          <Search className="absolute right-3 text-primary md:w-6 w-5" />
            <Input
              type="text"
              placeholder="Search.."
              className="px-2 py-1 w-[120px] md:w-[200px] transition-all duration-300 rounded-full  border border-gray-600 
              focus:ring-0 
              focus:outline-none 
              focus:border-primary 
              focus-visible:ring-0
              focus-visible:outline-primary
              focus:border-transparent cursor-text"
            ></Input> 
          </div>

          <img
            src={Logo}
            alt="logo"
            className="h-16  absolute  left-1/2 transform -translate-x-14"
          />

          <div className="hidden md:flex items-center gap-6">
            <ul className="sm:flex hidden items-center gap-4">
              {MenuPages.map((data) => (
                <li key={data.id} className="relative group">
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-secondary cursor-pointer"
                  >
                    {data.name}
                  </a>
                  <span className="absolute left-[15%] bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-[72%]"></span>
                </li>
              ))}
            </ul>

           

            <Button className="ml-1 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <ShoppingCart className="" />
            </Button>



            <div className="relative">
              <Button
                className="-ml-3 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary duration-200 text-white rounded-full"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                onMouseEnter={() => setUserMenuOpen(true)}
              >
                <User />
              </Button>

              {userMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg py-2"
                  onMouseEnter={() => setUserMenuOpen(true)}
                  onMouseLeave={() => setUserMenuOpen(false)}
                >
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Profil
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Nastavení
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  >
                    Odhlásit se
                  </a>
                </div>
              )}
            </div>
          </div>

          <button className="md:hidden right-4 hover:text-secondary duration-200 text-primary" 
            onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen && <X className="w-8 h-8"/>}
              {!menuOpen && <Menu className="w-8 h-8"/>}
            </button>
            </div>
            </div>


           
            

        


            {/*Mobilni menu */}

            {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg p-4 absolute w-full left-0">
          <ul className="flex flex-col items-center gap-4">
            {MenuPages.map((data) => (
              <li key={data.id} className="relative group">
                <a href={data.link} className="block py-2 text-lg hover:text-secondary cursor-pointer">
                  {data.name}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

              <div className=" flex justify-center gap-4 mt-4 cursor-pointer">
            <Button className=" bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <ShoppingCart className="" />
            </Button>

            <Button className="-ml-2 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <User className="" />
            </Button>
            </div>
        </div>
      )}
    </>
  );
}