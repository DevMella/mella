import React from 'react';
import './Mark.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Mark = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...Array(20)].map((_, i) => (
          <div className="marquee-item" key={i}>
            <span className='text-[30px]'>fenty</span>
            <FontAwesomeIcon icon={faSun} className='text-[22px] ml-1' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mark;
