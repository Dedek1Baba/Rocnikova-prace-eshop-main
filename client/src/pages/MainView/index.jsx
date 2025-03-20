import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteClothing, getClothingById } from "../../models/Clothing";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import css from "../Home/home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import StripeLogo from '@/assets/Stripe-Logo.png'; 
 
export default function MainView() {
  const { id } = useParams();
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
 
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
 
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
 
  const load = async () => {
    const data = await getClothingById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClothing(data.payload);
      setLoaded(true);
    }
  };
 
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
 
  const handleDelete = async (e) => {
    e.preventDefault();
    if (clothing.name === formData) {
      const data = await deleteClothing(id);
      if (data.status === 200) {
        alert("Clothing deleted successfully!");
        navigate(`/admin`);
      } else {
        setInfo(data.message);
      }
    } else {
      setInfo("Špatný vstup");
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
        <p>Clothing is loading...</p>
      </>
    );
  }
 
  return (
    <>
    <div className={css}></div>
      <div className="min-h-screen text-white">
       
        <Header />
 
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
 
 
          <div className="flex justify-center items-center">
            <img
              src={clothing.image}
              alt={clothing.name}
              className="rounded-xl shadow-2xl w-full max-w-md"
            />
          </div>
 
 
 
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold uppercase">
              {clothing.name}
              </h1>
 
            <div className="text-lg space-y-2">
              <p>
                <span className="font-semibold">Barva: </span>
                {clothing.color}
              </p>
              <p>
                <span className="font-semibold">Cena: </span>{" "}
                <span className="line-through text-gray-400 mr-2">
                  2.590 Kč
                </span>{" "}
                <span className=" font-bold">
                  {clothing.price} Kč
                </span>
              <span className="bg-white text-black text-sm font-bold px-3 py-1 rounded-full ml-2">
                Sale
                </span>
                </p>
            </div>
 
 
 
 
            <div>
              <p className="font-semibold mb-2">Velikost:</p>
              <div className="flex gap-2 font-semibold">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
 
 
 
            <div>  
            <p className="font-semibold mb-2">Množství:</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-white rounded-lg font-semibold">
                <button onClick={handleDecrease} className="px-3 py-1">
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={handleIncrease} className="px-3 py-1">
                  +
                </button>
              </div>
            </div>
            </div>
            
            <div className="flex flex-col gap-3 mt-5">
  <button className="bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-300 transition-all">
    Přidat do košíku
  </button>
  <button className="bg-purple-600 text-white font-bold py-2 rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center">
    Koupit přes
    <img 
      src={StripeLogo}
      alt="Stripe logo"
      className="w-12 h-7 ml-1 mt-1" 
    />
  </button>
  <p className="text-sm text-gray-400 text-center">
    Přes Stripe, můžete koupit produkt hned z jednoho kliknutí.
  </p>
</div>


 
 
 
            <div className="text-sm text-gray-300 mt-2 space-y-2">
 
              <p><b>• Materiál:</b>  {clothing.material}</p>
              <p><b>• Gramáž:</b> {clothing.gram}G</p>
              <p><b>• Doba dodání:</b> {clothing.delivery} dny</p>
 
              <p className="pt-2 font-bold">Návod k praní:</p>
 
              <p>
                Perte maximálně na 30 °C. Před praním otočte oblečení naruby.
                Pokud budete dodržovat tento postup, produkt nebude nijak poničen.
              </p>
 
            </div>
          </div>
        </div>
 
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}