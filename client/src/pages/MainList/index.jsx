import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllClothing } from "../../models/Clothing";
import MainLink from "./MainLink";
import { Button } from "@/components/ui/button";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import ScrollToTop from '@/components/ui/nahoru';
import css from "../Home/home.module.css"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllClothing();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setClothing(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Clothing not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  

  if (isLoaded) {
    return (
      <>
      <div className={css}></div>
       <Header />

        <div className="px-12 pt-12 pb-12">  <h1 className="text-3xl font-semibold text-white text-center mb-12">
              NAŠE PRODUKTY
            </h1>
        
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 justify-center items-start">

              {clothing.map((clothing, index) => (
                <MainLink key={index} {...clothing} />
              ))}
            </div>

           
        
        </div>

          <Footer />
        
              <ScrollToTop />
      </>
    );
  }
}
