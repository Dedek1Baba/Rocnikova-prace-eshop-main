import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClothing } from "../../models/Clothing";
import { Button } from "@/components/ui/button";

import React from 'react'

export default function ClothingClothingCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const clothing = await createClothing(formData);
    if (clothing.status === 201) {
      return navigate();
    }
    setInfo(clothing.message)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  return (
    <>

    <div className="flex items-center justify-center min-h-screen p-6">

    <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md flex flex-col items-center gap-6">

      <h1 className="text-2xl font-semibold text-gray-900">Create Clothing</h1>

  <form className="flex flex-col gap-1 w-full">

      <input type="text" name="name" required placeholder="Enter name" onChange={handleChange} className="p-3 border rounded-lg w-full" />
        <input type="text" name="brand" required placeholder="Enter brand" onChange={handleChange}  className="p-3 border rounded-lg w-full"/>
        <input type="text" name="color" required placeholder="Enter color" onChange={handleChange}  className="p-3 border rounded-lg w-full"/>
        <input type="number" name="price" required placeholder="Enter price" onChange={handleChange}  className="p-3 border rounded-lg w-full"/>
     </form>

     <form className="flex flex-col gap-1 w-full">
      <Button onClick={handlePost}  className="bg-indigo-600 hover:bg-indigo-500 w-full py-4 text-white text-lg rounded-lg">
          Add Clothing
        </Button>

        <Link to="/admin" className="bg-indigo-600 hover:bg-indigo-500 w-full py-[6px] text-white text-lg rounded-lg text-center font-semibold">
         Go back
        </Link>
      
      <p className="text-red-500">{info}</p>

      </form>
      
       </div>

    </div>

    </>
  )
}

