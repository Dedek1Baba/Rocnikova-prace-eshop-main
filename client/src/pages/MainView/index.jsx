import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteClothing, getClothingById } from "../../models/Clothing";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";
import StripeLogo from "@/assets/Stripe-Logo.png";
import { cn } from "@/lib/utils";
import css from "../Home/home.module.css";

export default function MainView() {
  const { id } = useParams();
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addItemToCart = () => {
    if (!selectedSize) return alert("Zvolte prosím velikost");
    if (!selectedColor) return alert("Zvolte prosím barvu");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    window.dispatchEvent(new Event("cartItemChanged"));

    const cartObject = {
      productId: id,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
    };

    const existingProductIndex = cart.findIndex(item => 
      item.productId === cartObject.productId && 
      item.size === cartObject.size && 
      item.color === cartObject.color
    );

    if (existingProductIndex !== -1) {

      const existingProduct = cart[existingProductIndex];
      const updatedQuantity = existingProduct.quantity + quantity;

      if (updatedQuantity > clothing.amount) {
        return toast("Více položek přidat nemůžete", {
          action: {
            label: <X />,
          },
        });
      }

      cart[existingProductIndex].quantity = updatedQuantity;
    } else {

      cart.push(cartObject);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Přidáno do košíku");

    window.dispatchEvent(new Event("cartItemChanged"));
  };


  

  const load = async () => {
    const data = await getClothingById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClothing(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

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

  const availableColors = ["Růžová", "Černá", "Šedá"];

  return (
    <>
      <div className={css}></div>
      <div className="min-h-screen text-white">
        <Header />

        <div className="absolute mt-14 ml-20">
          <button
            onClick={() => navigate("/products")}
            className="border text-white font-semibold px-4 py-2 rounded-xl hover:bg-black transition-all"
          >
            ← Zpět na produkty
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src={clothing.image}
              alt={clothing.name}
              style={{
                filter: "drop-shadow(0 0 10px white)",
              }}
              className="rounded-xl w-full max-w-md"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold uppercase mt-1">{clothing.name}</h1>

            <div className="text-lg space-y-2">
              <p>
                <span className="font-semibold">Cena: </span>
                <span className="line-through text-gray-400 mr-2">1599 Kč</span>
                <span className="font-bold">{clothing.price} Kč</span>
                <span className="bg-white text-black text-sm font-bold px-3 py-1 rounded-full ml-2">
                  Sale
                </span>
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Vyber barvu:</p>
              <div className="flex gap-2 font-semibold">
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all",
                      selectedColor === color ? "bg-white text-black" : ""
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Velikost:</p>
              <div className="flex gap-2 font-semibold">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all",
                      selectedSize === size ? "bg-white text-black" : ""
                    )}
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
              <button
                onClick={addItemToCart}
                className="bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-300 transition-all"
              >
                Přidat do košíku
              </button>
            </div>

            <div className="text-sm text-gray-300 mt-2 space-y-2">
              <p>
                <b>• Materiál:</b> {clothing.material}
              </p>
              <p>
                <b>• Gramáž:</b> {clothing.gram}G
              </p>
              <p>
                <b>• Doba dodání: </b>1–{clothing.delivery} dny
              </p>

              <p className="pt-2 font-bold">Návod k praní:</p>
              <p>
                Perte maximálně na 30 °C. Před praním otočte oblečení naruby.
                Pokud budete dodržovat tento postup, produkt nebude nijak
                poničen.
              </p>
            </div>
          </div>
        </div>

        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </>
  );
}
