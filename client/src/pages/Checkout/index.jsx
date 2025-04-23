import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Objednávka úspěšně dokončena! 🎉");
    navigate("/order-success"); 
  };

  return (
    <div className="min-h-screen  text-white ">
      <Header />
      <div className="max-w-4xl mx-auto p-8 backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl  mt-12 mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
    
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl font-semibold">Doručovací informace</h2>

            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Celé jméno"
              className="w-full p-3 rounded-xl bg-gray-200 text-white"
              required
            />
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-gray-200 text-white"
              required
            />
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Adresa"
              className="w-full p-3 rounded-xl bg-gray-200 text-white"
              required
            />
            <div className="flex space-x-4">
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Město"
                className="w-1/2 p-3 rounded-xl bg-gray-200 text-white"
                required
              />
              <Input
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="PSČ"
                className="w-1/2 p-3 rounded-xl bg-gray-200 text-white"
                required
              />
            </div>
            <Input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Země"
              className="w-full p-3 rounded-xl bg-gray-200 text-white"
              required
            />
          </div>

          <div className="space-y-4 mb-6">
            <h2 className="text-2xl font-semibold">Způsob platby</h2>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={handlePaymentChange}
                id="creditCard"
                className="mr-2"
              />
              <label htmlFor="creditCard">Kreditní karta</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentChange}
                id="paypal"
                className="mr-2"
              />
              <label htmlFor="paypal">PayPal</label>
            </div>


            </div><div className="flex justify-between text-lg font-semibold mb-3">
              <p>Celkem: X Kč</p>
  
           
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white py-3 rounded-xl"
          >
            Dokončit nákup
          </Button>

       
        </form>
      </div>

      <Toaster position="bottom-right" theme="light" richColors className="!bg-black !text-white" />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
