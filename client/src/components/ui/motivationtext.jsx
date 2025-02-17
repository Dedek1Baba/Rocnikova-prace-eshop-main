import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
          <button className="bg-gradient-to-br from-primary to-secondary hover:text-secondary text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition" data-aos="fade-up">
            Ukázat cestu
          </button>
          </a>

        </div>
      </div>
    </div>
  );
}
