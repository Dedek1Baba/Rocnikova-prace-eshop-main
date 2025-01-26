import React from 'react'
import { Input } from './input'
import { Search } from 'lucide-react'
import Logo from "../../assets/react.svg"


export default function Header() {
  return (
    <>
    <div className='shadow-xl shadow-gray-500/25'>
      <div className='container flex justify-between py-3  mx-auto items-center'>
        <h1>Ahoj</h1>
        <img src={Logo} alt="logo" className='h-14'/>
        <div className='flex'>
        <Search className='absolute mt-2 ml-2'/>
        <Input type="text" placeholder="Search" className="max-w-64 pl-10" ></Input>
        
        </div>
        </div>
      </div>
    </>
  )
}
