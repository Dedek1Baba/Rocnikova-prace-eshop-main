import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllClothing } from "../../models/Clothing";
import ClothingLink from "./ClothingLink";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [clothing, setClothing] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllClothing();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setClothing(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, [])

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
        <p>Loading...</p>
      </>
    )
  }

  if (isLoaded) {
    return (
      <>
         <div className="flex items-center justify-center min-h-screen p-6">

<div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center gap-6 ">
      <h1 className="text-2xl font-semibold text-gray-900">Clothing list</h1>
      <div className=" font-light float-right">
        {
          clothing.map((clothing, index) => (
            <ClothingLink key={index} {...clothing} />
          ))
        }

      </div>
      <Link to={"/admin"}>
      <Button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold">Go back</Button>
      </Link>
      </div> </div>
      </>
    )
  }
}
