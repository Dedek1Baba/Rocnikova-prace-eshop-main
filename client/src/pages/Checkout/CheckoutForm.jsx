import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { AddressElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <AddressElement options={{ mode: "shipping" }} />
      <PaymentElement id="payment-element" />
      <div className="flex justify-between text-lg font-semibold mb-2 mt-3">
          <p>Celkem: X Kč</p>
        </div>
      <Button
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        className="mt-3 w-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white py-3 rounded-xl"
      >
        {isProcessing ? "Processing ... " : "Dokončit nákup"}
      </Button>
   
      {message && <div id="payment-message">{message}</div>}

    </form>
  );
}
