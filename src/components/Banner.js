import React from 'react';

const host = document.location;

const Banner = () => {
  let isHomePage = host.pathname === '/';

  return (
    <div className={isHomePage ? 'banner  banner_home_sm' : 'banner'}>
      <div className={isHomePage ? 'banner_home' : 'banner_about'}></div>
      {isHomePage && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

export default Banner;
