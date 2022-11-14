import React from 'react';
import logo from '../assets/logoFooter.svg';

const Footer = () => {
    return (
      <div className='footer'>
        <img src={logo} alt='logo kasa' />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>
    );
};
export default Footer;