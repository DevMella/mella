import React from 'react'
import './Top.css'

const Top = () => {
  return (
    <div>
      <div className='now py-2 mt-4 rounded-[10px] '>
          <div className="marquee-content">
            {[...Array(40)].map((_, i) => (
              <div className="marquee-item" key={i}>
                <span className='font-semibold'>FREE SHIPPING ON ORDERS OVER $40</span>
                <span className='font-semibold ml-8'>30% DISCOUNT OFF ANY ONLINE ORDERS ❤</span>
                <span className='font-semibold ml-8'>SALES BEGINS 1ST OF JULY TILL 15TH OF JULY 👏</span>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Top
