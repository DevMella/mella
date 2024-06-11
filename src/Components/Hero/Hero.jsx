import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero w-full h-[500px] rounded-[0px_0px_10px_10px] px-3">
        <div className='flex md:justify-end sm:justify-start lal'>
            <div>
                <h1 className='text-white text-[30px] font-semibold md:mt-[370px] '>mella&trade; tastes like summer.</h1>
                <div className='flex justify-end'>
                   <button className='text-white text-[25px] font-[600] flex items-center justify-center mt-4    +'>GLAZE UP</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
