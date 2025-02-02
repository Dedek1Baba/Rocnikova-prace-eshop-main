import React from 'react'
import { Input } from './input'
import { Button } from './button';
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react';
import Logo from "../../assets/snith.logo.png"


export default function Header() {
  return (
    <>
    <div className='bg-primary shadow-xl shadow-gray-500/80'>
      <div className='container flex justify-between py-3  mx-auto items-center'>

      <div className='flex'>
        <Search className='absolute mt-2 ml-36'/>
        <Input type="text" placeholder="Search.." 
        className="px-2 py-1 group-hover:w-[200px] transition-all duration-300 rounded-full border border-gray-600  focus:outline-none focus:border-1 focus:border-primary" ></Input>
        </div>

        <img src={Logo} alt="logo" className='h-14 -ml-48'/>

       

        <div className='flex'>
       <Button className='absolute -mt-5 ml-24 bg-gradient-to-br from-primary to-secondary transition-all duration-200 text-white rounded-full items-center'>
        <ShoppingCart className=''/>
       </Button>
        </div>
    
        </div>
      </div>
    </>
  )
}
