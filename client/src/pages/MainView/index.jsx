import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteClothing, getClothingById } from "../../models/Clothing";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import ScrollToTop from '@/components/ui/nahoru';
import css from "../Home/home.module.css"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainView() {
  const { id } = useParams();
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

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
  };

  

  return (
    <>  
    <div className={css}></div>
 <Header />

       <div className="flex items-center justify-center min-h-screen p-6 ">
  <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col gap-6">
    
    <h1 className="text-3xl font-semibold text-gray-900 text-center">Clothing Detail</h1>

    <div className="space-y-2 text-base text-gray-700">
      <p><span className="font-semibold">ID:</span> {id}</p>
      <p><span className="font-semibold">Název:</span> {clothing.name}</p>
      <p><span className="font-semibold">Značka:</span> {clothing.brand}</p>
      <p><span className="font-semibold">Barva:</span> {clothing.color}</p>
      <p><span className="font-semibold">Cena:</span> {clothing.price}</p>
      <p><span className="font-semibold">Url Obrázku:</span> {clothing.image}</p>
    </div>


    <form onSubmit={handleDelete} className="flex flex-col gap-3 w-full">
  <input
    type="text"
    placeholder={clothing.name}
    onChange={handleChange}
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
  />
  
   
</form>
  </div>
</div>
   <Footer />

      <ScrollToTop />
    </>
  );
}
