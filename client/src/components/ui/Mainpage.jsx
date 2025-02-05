import React from "react";
import { motion } from "framer-motion";
import ShirtImage from "../../assets/shirt.png";
import hoodieImage from "../../assets/hoodie.png";
import backgroundImage from "../../assets/background.png";

export default function Mainpage() {
  return (
     <section
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-16"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">



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
            Vyrobeno z nejkvalitnších materiálů, perfektní pro každodenní nošení.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 px-6 py-3 bg-gradient-to-br from-primary to-secondary transition-all hover:text-secondary text-white text-lg font-semibold rounded-full shadow-md "
          >
            Zjistit více
          </motion.button>
        </div>





        {/* Obrázek */}

        <div className="relative flex justify-center">
          <motion.img 
            src={hoodieImage} 
            alt="Hoodie" 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-80 md:w-96 rounded-xl"
            style={{
              filter: "drop-shadow(0 0 10px white)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
