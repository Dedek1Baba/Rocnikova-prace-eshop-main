import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function Nahoru() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-4 bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-all duration-300 rounded-full flex items-center justify-center 
    ${isVisible && "opacity-100"} 
    ${!isVisible && "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={20} className="pointer-events-none"/>
    </button>
  );
}
