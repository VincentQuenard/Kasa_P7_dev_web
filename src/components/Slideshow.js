import React, { useState } from 'react';
import arrow from '../assets/arrow.svg';

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

//les flèches : changement au click donc useState de currentPicture avec sa fonction qui lui donnera sa nouvelle valeur setCurrentPicture avec l'état à o donc useState(0)

/*//--------------------------LIGHTOX p6 js/react-----------------------------------------

// ouverture lighbox en cliquant sur un media et affichage de ce média
function openLightbox() {
  const links = document.querySelectorAll('.media');
  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      mediaActive = index;
      bg_lightbox.style.display = 'block';
      affichageLightbox(tableau_medias[mediaActive]);
    });
  });
}

}
//clic flèche suivant
const displayNext = function () {
  mediaActive++;
  if (mediaActive === tableau_medias.length) {
    mediaActive = 0;
  }
  affichageLightbox(tableau_medias[mediaActive]);
};
arrowRight.addEventListener('click', function () {
  displayNext();
});

//clic flèche précédente
const displayPrevious = function () {
  mediaActive--;
  if (mediaActive < 0) {
    mediaActive = tableau_medias.length - 1;
  }
  affichageLightbox(tableau_medias[mediaActive]);
};
arrowLeft.addEventListener('click', function () {
  displayPrevious();
});
 */
