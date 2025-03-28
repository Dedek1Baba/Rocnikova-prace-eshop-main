import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import grayHoodie from "../../assets/ghoodie.png"; 
import pinkHoodie from "../../assets/phoodie.png"; 
import blackHoodie from "../../assets/bhoodie.png"; 
import backgroundImage from "../../assets/bggg.png";
import logo from "../../assets/snith.logo.png";
import { ArrowRight } from 'lucide-react';

export default function Mainpage() {
  const [selectedColor, setSelectedColor] = useState("gray");
  const [showLogo, setShowLogo] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };


  const getHoodieImage = () => {
    switch (selectedColor) {
      case "black":
        return blackHoodie;
      case "pink":
        return pinkHoodie;
      default:
        return grayHoodie;
    }
  };

  return (
    <section
      className="relative w-full h-[84vh] flex items-center justify-center px-6 md:px-16"
     
    >

      
      {/* Logo animace  */}
      <AnimatePresence>
        {showLogo && (
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 3, rotate: 45, y: -200, x: 100 }}
            transition={{ duration: 1 }}
            className="absolute w-48 md:w-64"
          />
        )}
      </AnimatePresence>

      {!showLogo && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center"
        >




          {/* Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold text-gray-200"
            >
              French Terry Cotton Hoodie
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-lg text-gray-200"
            >
              Vyrobeno z nejkvalitnějších materiálů, perfektní pro každodenní nošení.
            </motion.p>

            <a href="/hoodie">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className=" mt-6 px-5 py-3 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:bg-gray-300 transition-all rounded-3xl text-white text-lg font-semibold shadow-md cursor-pointer flex items-center mx-auto md:mx-0 gap-2"
            >
              Zjistit více <ArrowRight />
            </motion.button>
            </a>
          </div>




          {/* Hoodie Obrazewk */}
          <div className="relative flex flex-col items-center justify-center">
            <motion.img
              src={getHoodieImage()}
              alt="Hoodie"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-80 md:w-96 rounded-xl select-none "
           draggable="false"
              style={{
                filter: "drop-shadow(0 0 10px white)",
              }}

              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />

            <div className=" flex space-x-4">
            <button
              onClick={() => handleColorChange("gray")}
              className={"w-8 h-8 rounded-full bg-gray-600 border-2 " + (selectedColor === "gray" && "border-blue-500" || "border-gray-300")}
              title="Šedá"
            ></button>
            <button
              onClick={() => handleColorChange("black")}
              className={"w-8 h-8 rounded-full bg-black border-2 " + (selectedColor === "black" && "border-blue-500" || "border-gray-300")}
              title="Černá"
            ></button>
            <button
              onClick={() => handleColorChange("pink")}
              className={"w-8 h-8 rounded-full bg-pink-500 border-2 " + (selectedColor === "pink" && "border-blue-500" || "border-gray-300")}
              title="Růžová"
            ></button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
