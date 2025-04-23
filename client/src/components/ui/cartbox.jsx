import { getClothingById } from "@/models/Clothing";
import { useEffect, useState } from "react";

export default function CartBox(props) {
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    loadClothing();
  }, []);

  const loadClothing = async () => {
    const data = await getClothingById(props.productId);

    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setClothing(data.payload);
    }
  };

  const handleRemove = () => {
    props.onRemove(props.productId); 
  };

  const handleAddQuantity = () => {
    props.onUpdateQuantity(props.productId, props.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (props.quantity > 1) {
      props.onUpdateQuantity(props.productId, props.quantity - 1);
    }
  };

  if (!isLoaded) {
    return (
      <>
        <div>Načítá se...</div>
      </>
    );
  }

  return (
    <div className="flex items-center justify-between gap-2 p-4 border-b">
      <img src={clothing.image} className="w-32" alt="obrázek" />
      <div className="flex-1">
        <div className="text-xl">{clothing.name}</div>
        <div>{clothing.price * props.quantity} Kč</div>
        <div>{props.size}</div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={handleDecreaseQuantity} 
          className="px-2 py-1 bg-gray-200 rounded-lg text-black font-bold">-</button>
        <span>{props.quantity}</span>
        <button 
          onClick={handleAddQuantity} 
          className="px-2 py-1 bg-gray-200 rounded-lg text-black font-bold">+</button>
      </div>

      <button 
        onClick={handleRemove} 
        className="text-red-500 hover:text-red-700"
      >
        Smazat
      </button>
    </div>
  );
}
