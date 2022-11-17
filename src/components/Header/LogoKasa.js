import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoHeader.svg';

const LogoKasa = () => {
  return (
    <div className='logo_header'>
      <Link to={`/`}>
        <img src={logo} alt='Logo site Kasa' />
      </Link>
    </div>
  );
};
export default LogoKasa;
