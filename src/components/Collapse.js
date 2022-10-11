import React, { useState } from 'react';
import arrow from '../assets/arrow.svg';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='collapse_container'>
      <div className='collapse_header'>
        <h1 key={title}>{title}</h1>
        
        <img
          className='collapse_arrow'
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
          src={arrow}
          alt='fleche_dropdown'
        />
      </div>
      {isOpen && <p className='collapse_description'>{description}</p>}
    </div>
  );
};

export default Collapse;
