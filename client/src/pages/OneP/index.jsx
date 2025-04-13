import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Shirt, 
  FileText,  
  Home,
} 
  from "lucide-react";

export default function OneP() {
  return (

    <div className="flex items-center justify-center min-h-screen  p-6">

      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center gap-5">

        <h2 className="text-2xl font-semibold text-gray-900">One Product Panel</h2>



        <Link to="/createproduct" className="w-full">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-lg py-3 flex items-center justify-center text-white">
            <ShoppingBag className="mr-2" /> Add OneP
          </Button>
        </Link>

        <Link to="/onep" className="w-full">
          <Button className="w-full text-lg py-3 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
            <Shirt className="mr-2" /> View OneP
          </Button>
        </Link>
        <Link to="/admin" className="w-full">
          <Button className="w-full text-lg py-3 flex items-center justify-center bg-gray-500 hover:bg-gray-400 text-white">
             Go Back
          </Button>
        </Link>
        <Link to="/" className="w-full">
          <Button className="w-full text-lg py-3 flex items-center justify-center bg-gray-500 hover:bg-gray-400 text-white">
            Main Page
          </Button>
        </Link>
     
      </div>

    </div>

  );
}
