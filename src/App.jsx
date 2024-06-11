import React from 'react'
import Top from './Components/Top/Top'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Two from './Components/Two/Two'
import New from './Components/New/New'
import Mark from './Components/Mark/Mark'
import Lip from './Components/Lip/Lip'
import Car from './Components/Car/Car'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='app px-4 lg:px-7'>
       <Top/>
       <Navbar/>
       <Hero/>
       <Products/>
       <Two/>
       <New/>
       <Mark/>
       <Lip/>
       <Car/>
       <Footer/>
    </div>
  )
}

export default App
