import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import locations from '../data/logements.json'
import Thumb from './Thumb';

    
const Card = () => {
   
    return (
      <section className='cards_container'>
        <div className='cards'>
          {locations.map((location) => (
            <Link key={location.id} to={`/lodging/${location.id}`}>
              <Thumb title={location.title} cover={location.cover} />
            </Link>
          ))}
        </div>
      </section>
    );
};

export default Card;