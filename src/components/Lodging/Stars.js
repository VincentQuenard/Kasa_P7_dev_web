import React from 'react';
import emptyStar from '../../assets/emptyStar.svg';
import fullStar from '../../assets/fullStar.svg';


const Stars = ({apiRating}) => {
  //On construit un tableau vide grace au spread opérator avec 5 entrées
  // on boucle dessus et _ retire l'index 0
    const numberStars = [...Array(5)];
    return (
      
      <div className='stars'>
        {numberStars.map((_,star) =>
          apiRating >= star ? <img key={star} src={fullStar} alt='full star' /> : <img key={star} src={emptyStar} alt='empty star' />
        )}
      </div>
    );
};

export default Stars;