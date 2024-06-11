import React, { useRef } from 'react'
import './Car.css'
import front from '../../assets/front.png'
import white from '../../assets/white.png'
import cover from '../../assets/cover.jpg';
import cover1 from '../../assets/cover1.webp';
import cover2 from '../../assets/cover2.webp';
import cover3 from '../../assets/lip.webp';
import cover4 from '../../assets/cover4.jpg';
import cover5 from '../../assets/cover5.webp';

const Car = () => {
    const sliders = useRef();
    let tx = 0;
 
    const slideForwards = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        sliders.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackwards = ()=>{
        if(tx < - 0){
            tx += 25;
        }
        sliders.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='car'> 
       <div className="sliders">
            <ul ref={sliders}>
                <li>
                    <div className="image-containe">
                        <img src={cover5} alt="Initial" className="images w-[680px] h-[340px] object-cover rounded-[10px]" />
                        <div className="move">
                            <h1 className='font-semibold'>@mella ❤ fenty kit</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="image-containe">
                        <img src={cover1} alt="Initial" className="images rounded-[10px] w-[680px] h-[340px] object-cover" />
                        <div className="move">
                            <h1 className='font-semibold'>@heezal ❤ glazing milk</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="image-containe">
                        <img src={cover3} alt="Initial" className="images w-[680px] h-[340px] object-cover rounded-[10px]" />
                        <div className="move">
                            <h1 className='font-semibold'>@riri ❤ lip tint</h1>
                        </div>
                    </div>  
                </li>
                <li>
                    <div className="image-containe">
                        <img src={cover2} alt="Initial" className="images w-[680px] h-[340px] object-cover rounded-[10px]" />
                        <div className="move">
                            <h1 className='font-semibold'>@zeezah ❤ cleanser</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="image-containe">
                        <img src={cover4} alt="Initial" className="images w-[680px] h-[340px] object-cover rounded-[10px]" />
                        <div className="move">
                            <h1 className='font-semibold'>@ladun ❤ peptide lip</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="image-containe">
                        <img src={cover} alt="Initial" className="images w-[680px] h-[340px] object-cover rounded-[10px]" />
                        <div className="move">
                            <h1 className='font-semibold'>@nayan ❤ barrier set</h1>
                        </div>
                    </div>
                </li>
            </ul>
       </div>
       <div className='flex'>
          <img src={white} className='nex' alt=""  onClick={slideForwards}/>
          <img src={front} className='bac' alt="" onClick={slideBackwards}/>
       </div>
       
    </div>
  )
}

export default Car