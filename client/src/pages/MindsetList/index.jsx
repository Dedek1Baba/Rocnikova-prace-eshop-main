import React, { useEffect, useState } from "react";
import MindsetLink from "./MindsetLink";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import css from "../Home/home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";

export default function Mindset(props) {
  const [formData, setFormData] = useState({ email: "" });

  
    const [setOneP] = useState();
    const [isLoaded, setLoaded] = useState(false);
  
    const load = async () => {
      const data = await getAllOneP();
      if (data.status === 404 || data.status === 500) return setLoaded(null);
      if (data.status === 200) {
        setOneP(data.payload);
        setLoaded(true);
      }
    };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Děkujeme za připojení, užívejte slevu! 🎉");
    setFormData({ email: "" });
  };

  return (
    <>
      <div className={css}></div>
      <Header />

      <div className="min-h-screen text-white flex flex-col justify-center items-center px-4">
        <section className="text-center py-12 max-w-4xl w-full">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight text-white mb-10 pb-4 border-b-2 border-white w-full"
            data-aos="fade-up"
          >
            Posilni svůj mindset
          </h2>

          <p
            className="mt-8 text-lg sm:text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            "Tvá mentalita je tvá největší síla. Když věříš ve své schopnosti,
            žádná překážka není dost silná, aby tě zastavila."
          </p>
        </section>

        <section className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start">
                <MindsetLink {...props} />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                {props.name}
              </h3>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
                {props.description}
              </p>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-100">
                {props.price}
              </p>
              <div className="mt-8">
                <Button className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white py-3 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  Přidat do košíku
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-3xl mx-auto py-8 text-center">
          <Toaster
            position="bottom-right"
            theme="light"
            richColors
            className="bg-black text-white"
          />
          <h3
            className="text-2xl sm:text-3xl font-semibold text-white"
            data-aos="fade-up"
          >
            Chcete na náš discord + slevu až 20%?
          </h3>
          <p
            className="mt-6 text-lg sm:text-xl text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Zadejte váš e-mail a dostanete odkaz + promokód.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center mt-6 gap-2"
            data-aos="fade-up"
          >
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="snith@gmail.com"
              className="px-2 py-1 w-[220px] md:w-[220px] transition-all duration-300 rounded-xl border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary cursor-text text-black"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg hover:bg-gray-300 transition-all rounded-xl text-white"
            >
              Poslat
            </Button>
          </form>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
