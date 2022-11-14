import React from 'react';

const Thumb = ({cover, title}) => {
    return (
      <div className='card'>
        <img src={cover} alt='intérieur logement' />
        <h2>{title}</h2>
      </div>
    );
};

export default Thumb;