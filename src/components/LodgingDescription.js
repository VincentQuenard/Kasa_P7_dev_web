import React from 'react';
import Stars from './Stars';

const LodgingDescription = ({ title, location, name, picture, tags, apiRating }) => {
  
  return (
    <div className='rental_owner'>
      <div className='rental'>
        <h1>{title}</h1>
        <p> {location}</p>
        <ul className='tags'>
          {tags.map((tag) => (
            <li key={tag} className='tag'>{tag}</li>
          ))}
        </ul>
      </div>
      <div className='owner'>
        <div className='host'>
          <p>{name}</p>
          <img src={picture} alt='propriétaire' />
        </div>
       <Stars apiRating={apiRating}/>
      </div>
    </div>
  );
};

export default LodgingDescription;
