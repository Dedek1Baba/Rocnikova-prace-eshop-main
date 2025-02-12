import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import {
  Search,
  X,
  ShoppingCart,
  User,
  Menu,
  Settings,
  LogOut,
  Truck,
} from "lucide-react";
import Logo from "../../assets/snith.logo.png";

const MenuPages = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "Products",
    link: "/#products",
  },
  {
    id: 3,
    name: "Information",
    link: "/#information",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
    <div className="fixed left-0 top-0 w-full bg-black  text-center  text-sm md:text-base lg:text-lg z-50">
   <div className="text-white flex justify-center font-semibold items-center py-2 gap-2">
    <Truck className="" /> 
    DOPRAVA ZDARMA | ČR a SK
    </div>

      <div className="bg-gray-200 shadow-xl shadow-gray-500/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="container flex justify-between py-5 mx-auto items-center px-4 ">
          <div className="relative flex items-center gap-2">
            <Search className="absolute right-3 text-primary md:w-6 w-5" />
            <Input
              type="text"
              placeholder="Search.."
              className="px-2 py-1 w-[120px] md:w-[200px] transition-all duration-300 rounded-full border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary focus-visible:ring-0 focus-visible:outline-primary focus:border-transparent cursor-text"
            />
          </div>


          <a href="#home" className="absolute left-1/2 transform -translate-x-1/2">
            <img src={Logo} alt="logo" 
            className="h-16 " 
            draggable="false"/>
          </a>


          <div className="hidden lg:flex items-center gap-6">
            <ul className="lg:flex hidden items-center xl:gap-4 gap-0">
              {MenuPages.map((data) => (
                <li key={data.id} className="relative group">
                  <a href={data.link} className="inline-block px-4 hover:text-secondary cursor-pointer">
                    {data.name}
                  </a>
                  <span className="absolute left-[15%] bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-[72%]"></span>
                </li>
              ))}
            </ul>
            
            <a href="#cart" className="">
              <Button className="-ml-1 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary duration-200 text-white rounded-full items-center">
                <ShoppingCart />
              </Button>
            </a>

            <div className="relative">
              <a href="#user" className="">
                <Button className="-ml-3 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary duration-200 text-white rounded-full" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                  <User />
                </Button>
              </a>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg">
                  <a href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <User className="w-5 h-5 text-gray-600" /> Profil
                  </a>
                  <a href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Settings className="w-5 h-5 text-gray-600" /> Nastavení
                  </a>
                  <a href="/logout" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                    <LogOut className="w-5 h-5 text-red-500" /> Odhlásit se
                  </a>
                </div>
              )}
            </div>
          </div>

          <button
            className="lg:hidden right-4 hover:text-secondary duration-200 text-primary pt-2 pb-2 hover:underline"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {(() => {
              let Icon;
              if (menuOpen) {
                Icon = <X className="w-8 h-8" />;
              } else {
                Icon = <Menu className="w-8 h-8" />;
              }
              return Icon;
            })()}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className=" pb-4 w-full h-auto bg-white shadow-lg z-40 flex flex-col overflow-hidden lg:hidden">
          
          <div className="flex flex-col items-center mt-4 gap-6 overflow-y-auto">
            {MenuPages.map((data) => (
              <a key={data.id} href={data.link} className="text-lg hover:text-secondary cursor-pointer">
                {data.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8 cursor-pointer">
            
          <a href="#shoppingcart">
              <Button  className="bg-gradient-to-br from-primary to-secondary text-white rounded-full button_hover transition-all">
                <ShoppingCart className="w-6 h-6 text-white  transition-all" />
              </Button>
            </a>
            <a href="#user">
              <Button  className="bg-gradient-to-br from-primary to-secondary text-white rounded-full button_hover transition-all">
                <User className="w-6 h-6 text-white  transition-all " />
              </Button>
            </a>
          </div>
        </div>
      )}
       </div>
     
    </>
  );
}
