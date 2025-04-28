import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blackHoodie from "../../assets/bhoodie.png"; 
import backgroundImage from "../../assets/bggg.png";
import logo from "../../assets/snith.logo.png";
import { ArrowRight } from 'lucide-react';

export default function Mainpage() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[84vh] flex items-center justify-center px-6 md:px-16">
    
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

            <a href="/product/67dc0284f85664e01df36310">
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

          <div className="relative flex flex-col items-center justify-center">
            <motion.img
              src={blackHoodie} 
              alt="Hoodie"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-80 md:w-96 rounded-xl select-none"
              draggable="false"
              style={{
                filter: "drop-shadow(0 0 10px white)",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />

            <div className="flex space-x-4">
              <button
                className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"
                title="Černá"
                disabled 
              ></button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
