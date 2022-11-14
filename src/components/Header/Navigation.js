import React from 'react';
import { NavLink } from 'react-router-dom'; //Navlink pour créer les ancres

const Navigation = () => {
    return (
      <nav className='navigation'>
        <NavLink to='/' end className={(nav) => (nav.isActive ? 'active' : '')}>
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className={(nav) => (nav.isActive ? 'active' : '')}
        >A Propos
        </NavLink>
      </nav>
    );
};

export default Navigation;