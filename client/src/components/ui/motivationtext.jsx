import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight } from 'lucide-react';

export default function motivationtext() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (

    <div className="flex items-center justify-center  text-center px-6 pt-[50px] pb-[80px]">
      <div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none" data-aos="fade-up">
          Oni pochybují. <br /> Ty makáš.
        </h1>

        <p className="text-gray-300 text-lg mt-4" data-aos="fade-up">
          Když se ostatní zastaví, my jdeme dál. 
          Snith není jen značka – je to mindset.
        </p>

        <div className="flex justify-center mt-6" data-aos="fade-up">

            <a href="" >
          <button className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg hover:bg-gray-300 transition-all rounded-3xl text-white items-center   flex" data-aos="fade-up">
            Ukázat cestu <ArrowRight className="ml-1 "/>
          </button>
          </a>

        </div>
      </div>
    </div>
  );
}
