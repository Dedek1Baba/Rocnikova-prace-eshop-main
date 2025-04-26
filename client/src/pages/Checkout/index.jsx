import React, { useState, useEffect } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { createPaymentIntent, loadConfig } from "@/models/Stripe";
import { loadStripe } from "@stripe/stripe-js";

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

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const load = async () => {
    const data = await loadConfig();
    setStripePromise(loadStripe(data.publishableKey));

    const data2 = await createPaymentIntent();
    setClientSecret(data2.clientSecret);
  };

  useEffect(() => {
    load();
  }, []);
  return (
      <div className="min-h-screen text-white">
        <Header />
    
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
          <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl mt-12 mb-12 border border-white">
            <h1 className="text-4xl font-bold text-center mb-6">Checkout</h1>
    
            {clientSecret && stripePromise && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret: clientSecret,
                  appearance: { theme: "night" },
                }}
              >
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
    
        <Toaster
          position="bottom-right"
          theme="light"
          richColors
          className="!bg-black !text-white"
        />
        <Footer />
        <ScrollToTop />
      </div>
    );
    };
    