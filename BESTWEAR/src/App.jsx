import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './Components/SearchBar'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import About from './Pages/About'
import Verify from './Pages/Verify'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[pvw]' >
    <ToastContainer />
    <Navbar/>
    <SearchBar/>
    
    <Routes>     
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/verify' element={<Verify/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App