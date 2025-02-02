import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Search } from "lucide-react";
import { User } from 'lucide-react';
import { ShoppingCart } from "lucide-react";
import Logo from "../../assets/snith.logo.png";

const Menu = [
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
  return (
    <>
      <div className="bg-primary/10 shadow-xl shadow-gray-500/80 ">
        <div className="container flex justify-between py-5  mx-auto items-center">
          <div className="flex">
            <Search className="absolute mt-2 ml-36 w-8 transition-all  hover:text-secondary rounded-full" />
            <Input
              type="text"
              placeholder="Search.."
              className="px-2 py-1 group-hover:w-[200px] transition-all duration-300 rounded-full border border-gray-600  focus-visible:ring-0 focus:outline-none focus:border-1 focus:border-primary"
            ></Input>
          </div>

          <img
            src={Logo}
            alt="logo"
            className="h-14 absolute left-1/2 transform -translate-x-1/2"
          />

          <div className="flex">
            <ul className="sm:flex hidden items-center gap-4">
              {Menu.map((data) => (
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

            <Button className="ml-6 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <ShoppingCart className="" />
            </Button>

            <Button className="ml-2 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary  duration-200 text-white rounded-full items-center">
              <User className="" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
