import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm shadow-2xl shadow-purple-500 px-5 py-5 rounded-xl bg-blue-300'>

     <div>
        <img src={assets.logo1} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Since this company is 1500s when any printer loock at this website. Then more information on our product details visit latest collection 
        </p>
     </div>
 <div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About</li>
        <li>Delivery</li>
        <li>Privicy Policy</li>
    </ul>
 </div>
 <div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
       <li>+91 180-150-5789</li>
       <li>bestwear@anytime.com</li> 
    </ul>
 </div>
    </div>

    <div>
        <hr className='text-2xl'/>
        <p className='py-5 text-sm text-center'> Copyright 2024@ bestwear.com-All Right Reserved. </p>
    </div>

    </div>
  )
}

export default Footer
