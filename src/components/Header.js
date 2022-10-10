import React from 'react';
import logo from '../assets/logoHeader.svg';

import { NavLink } from 'react-router-dom'; //Navlink pour créer les ancres


const Header = () => {
    return (
      <div className='header'>
        <div className='logo_header'>
          <img src={logo} alt='Logo Kasa' />
        </div>
        <nav className='navigation'>
          
            <NavLink
              to='/'
              end
              className={(nav) => (nav.isActive ? 'active' : '')}
            >
              Accueil
            </NavLink>
            <NavLink
              to='/about'
              className={(nav) => (nav.isActive ? 'active' : '')}
            >
              A Propos
            </NavLink>
          
        </nav>
      </div>
    );
};

export default Header;