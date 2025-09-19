import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between shadow-2xl shadow-purple-600 rounded-xl '>
        <img  className='w-[max(6%,80px)]' src={assets.logo1} alt="" />
        <a href="http://localhost:5173/"><button className=' ml-10 px-5 py-2  text-white bg-black hover:bg-blue-500 rounded-xl'>HOME</button></a>
         <marquee className='text-2xl'><h1><b >ADMIN PANEL</b></h1></marquee>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
      
    </div>
  )
}

export default Navbar
