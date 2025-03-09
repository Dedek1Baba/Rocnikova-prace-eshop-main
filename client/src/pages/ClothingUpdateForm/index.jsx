import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateClothing, getClothingById } from "../../models/Clothing";

export default function ClothingUpdateForm() {
  const { id } = useParams();
  const [ clothing, setClothing ] = useState();
  const [ isLoaded, setLoaded ] = useState();
  const [ info, setInfo ] = useState();
  const [ formData, setFormData ] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getClothingById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClothing(data.payload);
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const data = await updateClothing(id, formData);
    if (data.status === 200) return navigate(`/clothing/${id}`);
    setInfo(data.message);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
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
      <h1>Clothing update form</h1>
      <p>{id}</p>
      <form>
      <input type="text" name="name" required placeholder="Enter name" onChange={handleChange} defaultValue={clothing.name}/>
        <input type="text" name="brand" required placeholder="Enter brand" onChange={handleChange} defaultValue={clothing.brand}/>
        <input type="text" name="color" required placeholder="Enter color" onChange={handleChange} defaultValue={clothing.color}/>
        <input type="number" name="price" required placeholder="Enter price" onChange={handleChange} defaultValue={clothing.price}/>
        <button onClick={handleUpdate}>
          Update Clothing
        </button>
      </form>
    </>
  )
}
