import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteClothing, getClothingById } from "../../models/Clothing";
import { useState, useEffect } from "react";

export default function ClothingView() {
  const { id } = useParams();
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getClothingById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClothing(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await deleteClothing(id, password);
    if (data.status === 200) {
      alert("Clothing deleted successfully!");
      navigate(`/admin`);
    } else {
      setInfo(data.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) return <p>Clothing not found</p>;
  if (!isLoaded) return <p>Clothing is loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 ">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          Clothing Detail
        </h1>

        <div className="space-y-2 text-base text-gray-700">
          <p><span className="font-semibold">ID:</span> {id}</p>
          <p><span className="font-semibold">Název:</span> {clothing.name}</p>
          <p><span className="font-semibold">Material:</span> {clothing.material}</p>
          <p><span className="font-semibold">Gramáž:</span> {clothing.gram}</p>
          <p><span className="font-semibold">Doba dodání:</span> {clothing.delivery}</p>
          <p><span className="font-semibold">Barva:</span> {clothing.color}</p>
          <p><span className="font-semibold">Cena:</span> {clothing.price}</p>
          <p><span className="font-semibold">Url Obrázku:</span> {clothing.image}</p>
        </div>

        <form onSubmit={handleDelete} className="flex flex-col gap-3 w-full">
          <input
            type="password"
            required
            placeholder="Admin password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Smazat Clothing
          </button>

          <p className="text-center text-sm text-red-500">{info}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link to={`/update/${id}`}>
              <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold ">
                Update Clothing
              </button>
            </Link>
            <Link to="/clothing">
              <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold">
                Go back
              </button>
            </Link>
            <Link to="/">
              <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold">
                Main Page
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
