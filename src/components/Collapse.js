import React from 'react';
import arrow from '../assets/arrow.svg';

const Collapse = ({title, description}) => {
  return (
    <div className='collapse_container'>
      <div className='collapse_header'>
        <h1>{title}</h1>
        <img className='collapse_arrow' src={arrow} alt='fleche_dropdown' />
      </div>
      <p className='collapse_description'>{description}</p>
    </div>
  );
};

export default Collapse;
