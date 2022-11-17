import React from 'react';

/* Getting the current url. */
const host = window.location;
const Banner = () => {
  let isHomePage = host.pathname === '/';

  return (
    <div className={isHomePage ? 'banner  banner_home_sm' : 'banner'}>
      <div
        className={
          isHomePage ? 'banner_img banner_home' : 'banner_img banner_about'
        }
      ></div>
      {isHomePage && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

export default Banner;
