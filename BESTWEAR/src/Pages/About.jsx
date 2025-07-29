import React from 'react'
import Title from '../Components/Title'
import assets from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
          <p>The Bestwear was born out of a passion for innovation and a desire to revolutionize the way people shop online.It provide a platform where our customers can access easily and explore ,purchase products from their homes</p>
          <p> We have a high-quality products to every taste and preference. we have a cloth meterial products    
          only.Our collection is trusted brands and suppliers .Your have to easily purchase and if you dont like i have a return policy in our bestwear site.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Bestwear is to empower customers with choice ,convenience, and confidence. We're dedicated to providing a seamless shopping experice that exceeds expectations.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p>Our product quality and brand is much affortable if buy this once  you want again our service is exceded. implementing process  procedures, and activities to ensure consistent quality</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convinience:</b>
        <p> User-friendly interface and hassle-free ordering process, shoping has best price. Quality makes something easy or useful for someone by reducing the amount of work or time required to do something.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service</b>
        <p>customer empathy is an easy way to show that you understand and appreciate their needs and circumstances. </p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
