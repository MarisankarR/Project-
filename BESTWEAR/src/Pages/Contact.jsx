import React from 'react'
import Title from '../Components/Title'
import assets from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl  pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-1/3 md:max-w-[480px]:' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'> 4/25 Gurunathar Street <br/>Bangalore </p>
            <p className='text-gray-500'>Tel:(415) 444-0015<br/>Email: admin@bestwear.com</p>
            <p className='text-gray-600 font-semibold text-xl'>Careers at Bestwear</p>
            <p className='text-gray-500'>Lean more about our tems and job oppeings</p> 
            <button className='border border-black px-8 py-4 text:sm hover:bg-black hover:text-white transition-all duration-50'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
