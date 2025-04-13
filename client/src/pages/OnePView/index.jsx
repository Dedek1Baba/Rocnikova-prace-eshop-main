import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteOneP, getOnePById } from "../../models/OneP";
import { useState, useEffect } from "react";

export default function OnePView() {
  const { id } = useParams();
  const [OneP, setOneP] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getOnePById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOneP(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (OneP.name === formData) {
      const data = await deleteOneP(id);
      if (data.status === 200) {
        alert("OneP deleted successfully!");
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
        <p>OneP not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>OneP is loading...</p>
      </>
    );
  }

  return (
    <>     <div className="flex items-center justify-center min-h-screen p-6 ">
  <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col gap-6">
    
    <h1 className="text-3xl font-semibold text-gray-900 text-center">OneP Detail</h1>

    <div className="space-y-2 text-base text-gray-700">
      <p><span className="font-semibold">ID:</span> {id}</p>
      <p><span className="font-semibold">Název:</span> {OneP.name}</p>
      <p><span className="font-semibold">Material:</span> {OneP.material}</p>
      <p><span className="font-semibold">Gramáž:</span> {OneP.gram}</p>
      <p><span className="font-semibold">Doba dodání:</span> {OneP.delivery}</p>
      <p><span className="font-semibold">Barva:</span> {OneP.color}</p>
      <p><span className="font-semibold">Cena:</span> {OneP.price}</p>
      <p><span className="font-semibold">Url Obrázku:</span> {OneP.image}</p>
    </div>


    <form onSubmit={handleDelete} className="flex flex-col gap-3 w-full">
  <input
    type="text"
    placeholder={OneP.name}
    onChange={handleChange}
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
  />
  <button
    type="submit"
    className="bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
  >
    Smazat OneP
  </button>



    <p className="text-center text-sm text-red-500">{info}</p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Link to={`/updateonep/${id}`}>
        <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold ">
          Update OneP
        </button>
      </Link>
      <Link to="/OneP">
        <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold">
          Go back
        </button>
      </Link>
      <Link to="/">
        <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold">
          Main Page
        </button>
      </Link>
    </div></form>
  </div>
</div>

    </>
  );
}
