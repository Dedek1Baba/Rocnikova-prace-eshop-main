import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "./input";
import { Button } from "./button";
import { Toaster, toast } from "sonner";

export default function SaleEmail() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
    <div className="flex items-center justify-center text-center px-6 pt-[50px] pb-[80px]">
<Toaster position="bottom-right" theme="light" richColors className="!bg-black !text-white" />



      <div>
        <h1
          className="text-4xl md:text-4xl font-extrabold text-white uppercase leading-none"
          data-aos="fade-up"
        >
          Chcete 20% slevu na další nákup?
        </h1>

        <p className="text-gray-300 text-lg mt-4" data-aos="fade-up">
          Dostávejte novinky od Snith e-mailem + informace o novém dropu.
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
            className="px-2 py-1 w-[220px] md:w-[220px] transition-all duration-300 rounded-xl border border-gray-600 focus:ring-0 focus:outline-none focus:border-primary cursor-text"
            required
          />
          <Button
            type="submit"
            className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 font-bold py-3 px-4 shadow-lg hover:bg-gray-300 transition-all rounded-xl text-white flex items-center"
          >
            Odebírat
          </Button>
        </form>
      </div>
    </div>
  );
}
