import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteClothing, getClothingById } from "../../models/Clothing";
import { useState, useEffect } from "react";

export default function ClothingView() {
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
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

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
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Clothing not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Clothing is loading...</p>
      </>
    )
  }

  return (
    <>
        <h1>Clothing view</h1>
        <p>{id}</p>
        <p>Název Clothingu {car.name}</p>
        <p>Značka: {car.brand}</p>
        <p>Barva: {car.color}</p>
        <p>Cena: {car.price}</p>
        <form>
          <input type="text" placeholder={car.name} onChange={handleChange} />
          <button onClick={handleDelete}>Smazat Clothing</button>
        </form>
        <p>{info}</p>
        <Link to={`/update-car/${id}`}>
          <p>Aktualizovat Clothing</p>
        </Link>

        <Link to={"/"}>
          <p>Go home</p>
        </Link>
    </>
  )
}
