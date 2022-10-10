import React from 'react';
//import img_home from '../assets/banniere_home1.jpg';
//import img_about from '../assets/banniere_about.jpg';


const host = document.location;

const Banner = () => {
  let isHomePage = host.pathname === '/';
 // let imgSrc = isHomePage ? img_home : img_about;
  
  return (
    <div className={isHomePage ? 'banner  banner_home_sm' : 'banner'}>
      <div className={isHomePage ? 'banner_home' : 'banner_about'}></div>
      {isHomePage && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

export default Banner;
