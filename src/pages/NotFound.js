import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div>
        <Header />
        <div className='notFound'>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/'>Retourner sur la page d'accueil</Link>
         
        </div>
        <Footer />
      </div>
    );
};

export default NotFound;