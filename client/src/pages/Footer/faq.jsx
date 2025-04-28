import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

export default function FAQ() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const faqData = [
    {
      question: "Jaké materiály používáte?",
      answer:
        "Používáme prémiový French Terry Cotton s gramáží 500g, což zajišťuje vysokou kvalitu, odolnost a komfort.",
    },
    {
      question: "Jak správně pečovat o vaše oblečení?",
      answer:
        "Praní na 30°C, nežehlit přes potisk a nesušit v sušičce pro delší životnost.",
    },
    {
      question: "Jak dlouho trvá doručení objednávky?",
      answer:
        "Doručení v ČR trvá 1-3 pracovních dnů. Mezinárodní objednávky mohou trvat 7–14 dní.",
    },
    {
      question: "Mohu vrátit nebo vyměnit produkt?",
      answer:
        "Ano, nabízíme 14denní lhůtu na vrácení nebo výměnu, pokud produkt není poškozený nebo nošený.",
    },
    {
      question: "Kde najdu vaše nové kolekce?",
      answer:
        "Na našem e-shopu a Instagramu pravidelně aktualizujeme nové kolekce a produkty.",
    },
    {
      question: "Jaké velikosti nabízíte?",
      answer:
        "Nabízíme velikosti od S po XL. Doporučujeme se podívat na naši velikostní tabulku pro přesné rozměry.",
    },
    {
      question: "Je možné zakoupit produkty i mimo e-shop?",
      answer:
        "Momentálně jsou naše produkty dostupné pouze online, ale plánujeme rozšíření do vybraných obchodů.",
    },
    {
      question: "Jaký je váš přístup k udržitelnosti?",
      answer:
        "Přijímáme ekologické výrobní procesy a používáme materiály šetrné k životnímu prostředí.",
    },
    {
      question: "Jak se staráte o kvalitu produktů?",
      answer:
        "Každý produkt prochází přísnou kontrolou kvality, abychom zajistili vysoký standard našich výrobků.",
    },
    {
      question: "Mohu zakoupit dárkový poukaz?",
      answer:
        "Ne, máme pouze limitované slevy.",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <Header />
      <div className="max-w-5xl mx-auto mt-12 mb-12 p-6 sm:p-12 border backdrop-blur-sm shadow-lg rounded-3xl">
        <h1
          className="text-5xl font-extrabold text-center text-gray-300 mb-10 pb-4 border-b-2 border-gray-300"
          data-aos="fade-up"
        >
          Často kladené dotazy (FAQ)
        </h1>
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              
              <div className="p-4 mb-4 bg-gray-200 rounded-xl">
                <h2 className="text-xl font-semibold text-black">
                  {item.question}
                </h2>

                <div className="pt-2 pl-4">
                  <ul className="list-disc pl-5">
                    <li className="text-gray-800">
                      {item.answer}
                      </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
