import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Toaster, toast } from "sonner";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";

export default function SaleInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const saleTimes = [
    {
      event: "Vánoce",
      date: "24.12.2025",
    },
    {
      event: "Jarní prázdniny",
      date: "15.02.2025",
    },
    {
      event: "Black Friday",
      date: ".4.2025 - 29.11.2025",
    },
    {
      event: "Nový rok",
      date: "01.01.2025",
    },
    {
      event: "Letní výprodeje",
      date: "01.07.2025",
    },
  ];

  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Děkujeme za připojení! 🎉");
    setFormData({ email: "" });
  };

  return (
    <div className="min-h-screen text-white">
           <Header />
      <div className="max-w-5xl mx-auto mt-12 mb-12 p-6 sm:p-12 border backdrop-blur-sm shadow-lg rounded-3xl">
        <h1 className="text-5xl font-extrabold text-center text-gray-300 mb-10 pb-4 border-b-2 border-gray-300" data-aos="fade-up">
          Kdy většinou dáváme slevy?
        </h1>
        <div className="space-y-8 text-center   ">
          {saleTimes.map((item, index) => (
            <div key={index} className="  rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-100 mb-2">{item.event}</h2>
              <p className="text-gray-300 mb-2">Datum: {item.date}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center text-center px-6 pt-[50px]">
          <Toaster position="bottom-right" theme="light" richColors className="!bg-black !text-white" />
          <div>
            <h1 className="text-4xl md:text-4xl font-extrabold text-white uppercase leading-none" data-aos="fade-up">
              Chcete slevu??
            </h1>
            <p className="text-gray-300 text-lg mt-4" data-aos="fade-up">
              Dostávejte slevy od Snith jako první.
            </p>
            <form onSubmit={handleSubmit} className="flex justify-center items-center mt-6 gap-2" data-aos="fade-up">
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="snith@gmail.com"
                className="px-2 py-1 w-[220px] md:w-[220px] transition-all duration-300 rounded-xl border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary cursor-text"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg hover:bg-gray-300 transition-all rounded-xl text-white flex items-center"
              >
                Poslat
              </Button>
            </form>
          </div>
        </div>
      </div><Footer />
      <ScrollToTop />
    </div>
       
  );
}
