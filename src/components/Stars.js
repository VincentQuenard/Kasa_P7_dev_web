import React from 'react';
import emptyStar from '../assets/emptyStar.svg';
import fullStar from '../assets/fullStar.svg';


const Stars = ({apiRating}) => {
    const numberStars = [...Array(5)];
    return (
      <div className='stars'>
        {numberStars.map((_,star) =>
          apiRating >= star ? <img src={fullStar} alt='full star' /> : <img src={emptyStar} alt='empty star' />
        )}
      </div>
    );
};

export default Stars;