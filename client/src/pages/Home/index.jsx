import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import React from 'react'

export default function Home() {
  return (
    <>
    
        <Link to={"/add-car"}>
            <p>Add car</p>
            <Button variant="outline">Button</Button>
        </Link>

        <Link to={"/view-cars"}>
            <p>View car</p>
        </Link>
    </>
  )
}
