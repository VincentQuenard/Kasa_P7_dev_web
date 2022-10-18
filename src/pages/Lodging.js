import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import LodgingDescription from '../components/LodgingDescription';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';

const Lodging = () => {
  const { id } = useParams();
  const [locations, setLocations] = useState([]);
  const getData = () => {
    axios.get('../logements.json').then((res) => setLocations(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  //
  const locationById = locations.find((location) => location.id === id);

  //composants paramètrés avec props des composants enfants
  return (
    <section>
      {locationById && (
        <div>
          <Slideshow key={locationById.id} pictures={locationById.pictures} />
          <LodgingDescription
            title={locationById.title}
            location={locationById.location}
            name={locationById.host.name}
            picture={locationById.host.picture}
          />
          <div className='collapse_group_container'>
            <Collapse
              title='Description'
              description={locationById.description}
            />
            <Collapse
              title='Equipements'
              description={locationById.description}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Lodging;
