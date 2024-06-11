import React from 'react'
import './Two.css'
import all from '../../assets/all.jpg'

const Two = () => {
  return (
    <div className='two' id='two'>
      <div className='two mb-10 w-full'>
        <div className="grid  ">
            <div className='px-7'>
                <h1 className='text-[35px] font-bold leading-[40px]'>one of everything really good</h1>
                <p className='font-semibold mt-4'>At fenty, we create tried-and-true skincare with a little something new. Our formulas pair always beloved ingredients with newer ones for ultimate barrier nourishment. Each product has a unique, lush texture that feels dreamy on your skin and makes for a routine you always look forward to.</p>
                <button className='font-semibold text-[20px] mt-5 mb-3'>MEET FENTY</button>
            </div>
            <div className='how'>
              <img src={all} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Two
