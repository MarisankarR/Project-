import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/assets';
import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const[visible,setVisible]= useState(false);

  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems}= useContext(ShopContext);

  const logout =() => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    
  }

  return (
     <div className='flex items-center justify-between py-5 px-6 font-medium shadow-2xl shadow-purple-600 rounded-xl bg-blue-200'>
      <NavLink to="/home"> <img src={assets.logo1} className='w-38  hover:scale-110 transition ease-in rounded-lg' alt="logo" /></NavLink>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

         <NavLink to="/home" className='flex flex-col items-center gap-1 px-2 py-2 transition-all duration-300  hover:bg-red-400 hover:background rounded-lg hover:scale-110  ease-out ' activeclassname="text-black">
            <p>HOME</p>
           <hr className='w-2 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
         <NavLink to="/collection" className='flex flex-col items-center gap-1 px-2 py-2 transition-all duration-300  hover:bg-red-400 hover:background rounded-lg hover:scale-110  ease-out ' activeclassname="text-black">
            <p>COLLECTION</p>
           <hr className='w-2 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
         <NavLink to="/about" className='flex flex-col items-center gap-1 px-2 py-2 transition-all duration-300  hover:bg-red-400 hover:background rounded-lg hover:scale-110  ease-out ' activeclasssname="text-black">
            <p>ABOUT</p>
           <hr className='w-2 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
         <NavLink to="/contact" className='flex flex-col items-center gap-1 px-2 py-2 transition-all duration-300  hover:bg-red-400 hover:background rounded-lg hover:scale-110  ease-out ' activeclassname="text-black">
            <p>CONTACT</p>
           <hr className='w-2 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
    
      </ul>
      <div>
        <a href='http://localhost:5174/'><button className='rounded-lg hover:bg-blue-600 bg-black text-white px-5 py-3'> Admin Panel</button></a>
      </div>
      <div className='flex items-center gap-6'> 
      <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition ease-in' alt=""/>

      <div className='group relative'>
       
       <img onClick={() => token ? null: navigate('/login')} className='w-5 cursor-pointer hover:scale-110 transition ease-in' src={assets.profile_icon} alt="" />
        {/*---------Dropdown Menu-------- */}
         { token &&
         <div className=' group-hover:block hidden absolute droupdown-menu  right-1 mr-2 mt-0.5 rounded'>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
          <p className='cursor-pointer hover:text-black'>My Profile</p>
          <p onClick={() =>navigate('/orders') } className='cursor-pointer hover:text-black'>Orders</p>
          <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
        
          </div>
        </div>
          }
      </div>
      <Link to='/cart' className='relative'>
      <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-110 transition ease-in' alt="" />
      <p className='absolute right-[-4px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
      
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu" />
      </div>

      {/*Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?"w-full": "w-0"}`}> 
      <div className='flex flex-col  tex-gray-600'>
        <div onClick={()=>setVisible(false)} className='flex items-center gap-5 p-2 cursor-pointer'>
        <img  className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
          <p>Back</p>
        </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/collection'>COLLECCTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>

      </div>
      </div>
  )
}

export default Navbar
