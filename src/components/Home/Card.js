import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Thumb from './Thumb';

const Card = () => {
  const [locations, setLocations] = useState([]);
  const getData = () => {
    axios.get('logements.json').then((res) => setLocations(res.data));
  };
  useEffect(() => {
    getData();
  }, []);

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
