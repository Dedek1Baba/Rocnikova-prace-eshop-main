import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateOneP, getOnePById } from "../../models/OneP";
import { Button } from "@/components/ui/button";

export default function OnePUpdateForm() {
  const { id } = useParams();
  const [ OneP, setOneP ] = useState();
  const [ isLoaded, setLoaded ] = useState();
  const [ info, setInfo ] = useState();
  const [ formData, setFormData ] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getOnePById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOneP(data.payload);
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const data = await updateOneP(id, formData);
    if (data.status === 200) return navigate(`/onep/${id}`);
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
        <p>OneP not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>OneP is loading...</p>
      </>
    )
  }

  return (
    <> <div className="flex items-center justify-center min-h-screen p-6">
    <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold text-gray-900">OneP Update</h1>
      <p className="text-gray-500">ID: {id}</p>
  
      <form className="flex flex-col gap-1 w-full">
      <input
                type="text"
                name="name"
                required
                placeholder="Enter name"
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="text"
                name="material"
                required
                placeholder="Enter material"
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
               <input
                type="number"
                name="gram"
                required
                placeholder="Enter gram"
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
               <input
                type="number"
                name="delivery"
                required
                placeholder="Enter delivery"
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="text"
                name="color"
                required
                placeholder="Enter color"
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
            
              <input
                type="number"
                name="price"
                required
                placeholder="Enter price"
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              /> 
               <input
              type="text"
              name="image"
              required
              placeholder="Enter image URL"
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
            />

      </form>
  
      <form className="flex flex-col gap-1 w-full">
        <Button
          onClick={handleUpdate}
          className="bg-indigo-600 hover:bg-indigo-500 w-full py-4 text-white text-lg rounded-lg"
        >
          Update OneP
        </Button>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-[8px] mt-1">
          <Link to="/admin">
            <Button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold w-full">
              Go back
            </Button>
          </Link>
          <Link to="/">
            <Button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold w-full">
              Main Page
            </Button>
          </Link>
        </div>
  
        <p className="text-red-500">{info}</p>
      </form>
    </div>
  </div>
  
  
    </>
  )
}
