import React,{ useState, useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
   
    const { products } =useContext(ShopContext);
    const [latestProducts,setLatestProducts]= useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,9))
    },[products])
  
    return (

    <div className='my-10 shadow-2xl shadow-purple-600 rounded-xl bg-blue-300' >
    <div className='text-center py-8 text-3xl' >
       <Title text1={'LATEST'} text2={'COLLECTION'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
       Latest collection showing this page let you know your products uderbelow this page 
       </p>
    </div>  
     {/*Rendering Products */}
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-5'>
    {
    latestProducts.map((item,index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    ))

    }

     </div>
    </div>
    
  )
}

export default LatestCollection
