import React from 'react'
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
   <div className='text-white flex w-full h-12 bg-gray-800 items-center justify-around overflow-x-hidden'>
    <ul>
      <li className='text-white font-bold text-xl'> 
        <span className='text-green-600'>&lt;</span>Pass<span className='text-green-600'>OP/&gt;</span></li>
    </ul>
    <ul className='flex items-center justify-around rounded-full bg-green-800'>
     <FaGithub className='w-12 h-10 text-gray-300  ' />
     <span className='pr-2 text-gray-300 font-bold'>GitHub</span>

    </ul>
   </div>
  )
}

export default Navbar
