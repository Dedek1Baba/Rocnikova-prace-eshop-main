import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/animace.logo.gif";
import CartBox from "./cartbox";
import {
  Search,
  X,
  ShoppingCart,
  User,
  Menu,
  Settings,
  LogOut,
  Truck,
  BadgePercent,
  House,
  Shirt,
  BookOpen,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MenuPages = [
  { id: 1, name: "Domov", link: "/", icon: House },
  { id: 2, name: "Produkty", link: "/products", icon: Shirt },
  { id: 3, name: "Mindset", link: "/mindset", icon: BookOpen },
];

const UserMenuPages = [
  { id: "profil", name: "Profil", icon: User, link: "/profil" },
  { id: "sleva", name: "Slevové kódy", icon: BadgePercent, link: "/discounts" },
  { id: "settings", name: "Nastavení", icon: Settings, link: "/settings" },
  {
    id: "logout",
    name: "Odhlásit se",
    icon: LogOut,
    link: "/logout",
    style: { color: "red" },
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    try {
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  const handleRemoveFromCart = (productId, size, color) => {
    const updatedCart = cart.filter(
      (item) => !(item.productId === productId && item.size === size && item.color === color)
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("totalItemsUpdate"));
  };
  
  

  const handleUpdateQuantity = (productId, size, color, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId && item.size === size && item.color === color
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    window.dispatchEvent(new Event("cartItemChanged"));

    
  };
  
  

  const toggleCart = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleCartUpdate = () => {
      const storedCart = localStorage.getItem("cart");
      try {
        setCart(storedCart ? JSON.parse(storedCart) : []);
      } catch {
        setCart([]);
      }
    };
  
    window.addEventListener("cartItemChanged", handleCartUpdate);
  
    return () => {
      window.removeEventListener("cartItemChanged", handleCartUpdate);
    };
  }, []);
  

  return (
    <>
      <div className="w-full text-center text-sm md:text-base lg:text-lg">
        <div className="text-white flex justify-center font-semibold items-center py-2 gap-2 bg-black">
          <Truck /> DOPRAVA ZDARMA | ČR a SK
        </div>
      </div>

      <div className="backdrop-blur-sm bg-opacity-95 border-b-2 sticky top-0 z-50">
        <div className="container flex justify-between py-5 mx-auto items-center px-4">
          <div className="relative flex items-center gap-2">
            <Search className="absolute right-3 text-primary md:w-6 w-5" />
            <Input
              type="text"
              placeholder="Search.."
              className="px-2 py-1 w-[120px] md:w-[200px] transition-all duration-300 rounded-full border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary cursor-text"
            />
          </div>

          <a href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={Logo}
              alt="logo"
              className="h-44 w-40"
              draggable="false"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="lg:flex hidden items-center xl:gap-4 gap-0">
              {MenuPages.map((data) => (
                <li
                  key={data.id}
                  className="relative group text-white font-semibold"
                >
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

            <div className="relative">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setMenuOpen(false);
                }}
                className="p-1.5 -ml-3 relative hover:scale-[1.05] transition-transform duration-200 ease-linear focus-visible:outline-none rounded-full text-white"
              >
                {cart.length > 0 && (
                  <div className="absolute right-0 top-1 translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </div>
                )}
                <ShoppingCart size={23} />
              </button>
            </div>

          
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => {
                setIsOpen(true);
                setMenuOpen(false);
              }}
              className="p-2 relative hover:scale-[1.05] transition-transform duration-200 ease-linear focus-visible:outline-none rounded-full text-white"
            >
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <div className="absolute right-0 top-1 translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </div>
              )}
            </button>

      
          </div>

          
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-end">
              <div className="absolute inset-0" onClick={toggleCart}></div>

              <div className="relative w-[500px] h-screen bg-black text-white shadow-lg text-center cart-container flex flex-col">
                <div className="flex-1 overflow-y-auto p-6">
                  <button
                    onClick={toggleCart}
                    className="absolute top-4 right-8 text-white hover:text-gray-400"
                  >
                    <X size={24} />
                  </button>

                  {Array.isArray(cart) && cart.length > 0 ? (
                    <>
                      {cart.map((item) => (
                     <CartBox
                     key={item.productId}
                     productId={item.productId}
                     name={item.name}
                     quantity={item.quantity}
                     price={item.price}
                     size={item.size}
                     color={item.color}
                     image={item.image}
                     onRemove={handleRemoveFromCart}
                     onUpdateQuantity={handleUpdateQuantity}
                   />
                   
                      ))}
                      <Link to="/checkout">
                        <button className="bg-white text-black font-bold py-3 mt-4 rounded-xl hover:bg-gray-300 transition-all w-full">
                          Pokračovat k pokladně
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="mt-16 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-6">
                          Košík je prázdný
                        </h2>
                        <button className="w-4/5 py-3 bg-white text-black font-semibold rounded-md mb-4">
                          <Link to="/products">Ukázat produkty</Link>
                        </button>
                        <p className="text-sm">
                          Máte účet?{" "}
                          <a href="/login" className="text-white underline">
                            Přihlaste se
                          </a>{" "}
                          pro rychlejší nákup.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
