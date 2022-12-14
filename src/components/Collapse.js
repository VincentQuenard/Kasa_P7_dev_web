import React, { useState } from 'react';
import arrow from '../assets/arrow.svg';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='collapse_container'>
      <div className='collapse_header'>
        <h1 key={title}>{title}</h1>

        <img
          onClick={() => setIsOpen(!isOpen)}
          className={
            isOpen ? 'collapse_arrow collapse_arrow_open' : 'collapse_arrow '
          }
          src={arrow}
          alt='fleche_dropdown'
        />
      </div>
      {isOpen && (
        <div className='collapse_description'>{description}</div>
      )}
    </div>
  );
};

export default Collapse;
