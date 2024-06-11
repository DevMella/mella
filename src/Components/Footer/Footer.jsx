import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer rounded-[10px]  py-5'>
      <div>
         <div className='px-7'>
            <h1 className='text-[#67645e] leading-[400px] font-bold text-[400px] tracking-tighter'>mella&trade;</h1>
         </div>
         <div className="line"></div>
         <div className='grid grid-cols-3'>
            <div className='px-7 mt-9'>
              <div>
                <h3 className='text-[17px] tracking-tight font-semibold text-[gray]'>Join us on the fenty to an effortless glow.</h3>
                <h3 className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Glaze your inbox with tips, tricks & exclusive content from Hailey.</h3>
                <form action="" >
                  <div className='flex mt-4'>
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='flex '>
                 <div className="mine"></div>
                 <div className='px-7 pt-8 flex gap-[40px] how'>
                    <div>
                      <h2 className='font-bold text-[20px]'>NAVIGATE</h2>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Shop</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Rhode Futures</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Impact</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>VLOG</p>
                    </div>
                    <div>
                      <h2 className='font-bold text-[20px]'>SOCIAL</h2>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Instagram</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Youtube</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>TikTok</p>
                    </div>

                    <div>
                      <h2 className='font-bold text-[20px]'>OFFICIAL</h2>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Privacy</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Terms</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Accessibility</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>FAQ</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Contact</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Events</p>
                    </div>

                    <div>
                      <h2 className='font-bold text-[20px]'>SUPPORT</h2>
                      <p className='text-[17px] mt-4 tracking-tighter font-semibold text-[gray]'>We’re here M-F 9am - 5pm PST.</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Drop us a note anytine: <a href="">hello@mellafenty.com</a></p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>Cookie Preferences</p>
                      <p className='text-[17px] mt-4 tracking-tight font-semibold text-[gray]'>© rhode 2024</p>
                    </div>
                  </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
