import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllClothing } from "../../models/Clothing";
import MainLink from "./MainLink";
import { Button } from "@/components/ui/button";
import Error from "../Error/error"
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import ScrollToTop from '@/components/ui/nahoru';
import css from "../Home/home.module.css"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSearchParams } from "react-router-dom";

export default function Main() {
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const load = async () => {
    console.log(searchParams.get("name"))
    const data = await getAllClothing(searchParams.get("name"));
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
        <Error></Error>
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
