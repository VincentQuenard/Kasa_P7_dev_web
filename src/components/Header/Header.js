import React from 'react';

import LogoKasa from './LogoKasa';
import Navigation from './Navigation';

/**
 * It returns a div with the className 'header' and the two components LogoKasa and Navigation inside
 * of it.
 * @returns The Header component is being returned.
 */
const Header = () => {
  return (
    <div className='header'>
      <LogoKasa />
      <Navigation />
    </div>
  );
};
export default Header;
