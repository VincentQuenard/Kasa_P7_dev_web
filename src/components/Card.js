import React, { useContext } from 'react';
import { ApiContext } from '../App';
import { Link } from 'react-router-dom';

import Thumb from './Thumb';

const Card = () => {
  const locations = useContext(ApiContext);
  return (
    <section className='cards_container'>
      <div className='cards'>
        {locations &&
          locations.map((location) => (
            <Link key={location.id} to={`/lodging/${location.id}`}>
              <Thumb title={location.title} cover={location.cover} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Card;
