import React from 'react';
import emptyStar from '../../assets/emptyStar.svg';
import fullStar from '../../assets/fullStar.svg';

const Stars = ({ apiRating }) => {
  //On construit un tableau vide  avec 5 entrées
  // on boucle dessus et en fonction de nombre / 5 du rating du json, étoiles pleines ou vides
  const numberStars = [1,2,3,4,5];
  return (
    <div className='stars'>
      {numberStars.map((star) =>
        apiRating >= star ? (
          <img key={star.toString()} src={fullStar} alt='red-star-icon' />
        ) : (
          <img key={star.toString()} src={emptyStar} alt='grey-star-icon' />
        )
      )}
     
    </div>
  );
};

export default Stars;
