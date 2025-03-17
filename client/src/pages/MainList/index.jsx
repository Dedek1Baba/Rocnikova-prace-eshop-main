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
        <div className="flex items-center justify-center min-h-screen p-6">
          <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center gap-6 ">
            <h1 className="text-2xl font-semibold text-gray-900">
              Clothing list
            </h1>
            <div className=" font-light float-right">
              {clothing.map((clothing, index) => (
                <MainLink key={index} {...clothing} />
              ))}
            </div>

           
          </div>{" "}
        </div>

          <Footer />
        
              <ScrollToTop />
      </>
    );
  }
}
