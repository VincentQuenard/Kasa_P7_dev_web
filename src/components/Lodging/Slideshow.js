import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';

const Slideshow = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const arrayPicturesLength = pictures.length;
  function nextPicture() {
    setCurrentPicture(
      currentPicture === arrayPicturesLength - 1 ? 0 : currentPicture + 1
    );
  }
  function previousPicture() {
    setCurrentPicture(
      currentPicture === 0 ? arrayPicturesLength - 1 : currentPicture - 1
    );
  }
  //Si nb photo > 1 alors on affiche les flèches et le count
  //Le count pour afficher : current + 1 car index 1 = 0 / arrayPicturesLength
  const hasMultiplePictures = arrayPicturesLength > 1;
  return (
    <div className='slideshow_container'>
      <img
        className='slideshow_img'
        src={pictures[currentPicture]}
        alt='intérieur'
      />

      {hasMultiplePictures && (
        <img
          className='arrow_right'
          onClick={() => {
            nextPicture();
          }}
          src={arrow}
          alt='Next slide'
        />
      )}
      {hasMultiplePictures && (
        <img
          className='arrow_left'
          onClick={() => {
            previousPicture();
          }}
          src={arrow}
          alt='previous slide'
        />
      )}
      {hasMultiplePictures && (
        <p className='count'>
          {currentPicture + 1}/{arrayPicturesLength}
        </p>
      )}
    </div>
  );
};

export default Slideshow;

