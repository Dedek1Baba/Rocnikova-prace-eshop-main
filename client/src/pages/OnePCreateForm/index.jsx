import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createOneP } from "../../models/OneP";
import { Button } from "@/components/ui/button";

import React from "react";

export default function OnePCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const onep = await createOneP(formData);
    if (onep.status === 201) {
      return navigate(`/created-onep/${onep.payload._id}`);
    }
    setInfo(onep.message);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md flex flex-col items-center gap-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create One Product
          </h1>

       
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
    onClick={handlePost}
    className="bg-indigo-600 hover:bg-indigo-500 w-full py-4 text-white text-lg rounded-lg"
  >
    Add onep
  </Button>

  <div className="grid grid-cols-2 sm:grid-cols-2 gap-[8px] mt-1">
    <Link to="/oneproductpanel">
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
  );
}
