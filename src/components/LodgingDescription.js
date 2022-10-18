import React from 'react';

const LodgingDescription = ({ title, location, name, picture }) => {
  return (
    <div className='rental_owner'>
      <div className='rental'>
        <h1>{title}</h1>
        <p> {location}</p>
        <ul>
          <li>tag1</li>
          <li>tag2</li>
          <li>tag3</li>
        </ul>
      </div>
      <div className='owner'>
        <div className='host'>
          <p>{name}</p>
          <img src={picture} alt='propriétaire' />
          <ul>
            <li>X</li>
            <li>X</li>
            <li>X</li>
            <li>X</li>
            <li>X</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LodgingDescription;
