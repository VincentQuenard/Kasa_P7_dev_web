import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LodgingDescription from '../components/LodgingDescription';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import NotFound from './NotFound';

const Lodging = () => {
  const { id } = useParams();
  const [locations, setLocations] = useState([]);
  const getData = () => {
    axios.get('../logements.json').then((res) => setLocations(res.data));
  };
  useEffect(() => {
    getData();
  }, []);

/*const { id } = useParams();
  const [locationById, setlocation] = useState(null);
  const getData = () => {
    axios.get('../logements.json').then((res) => {
      const locationById = res.data.find((location) => location.id === id);
      setlocation(locationById);
    });
  };
  useEffect(() => {
    getData();
  }, [locationById]);*/


  if (locations.length <= 0 || !locations) {
    return <span>........</span>;
  }

  const locationById = locations.find((location) => location.id === id);
  console.log(locationById);
  if (!locationById) {
    return <NotFound />;
  }

  //composants paramètrés avec props des composants enfants
  return (
    <section>
      <div className='loader'>
        <h1 className='loader_titre'>Loading</h1>
        <div className='LoaderBalls'>
          <div className='LoaderBalls__item1'></div>
          <div className='LoaderBalls__item2'></div>
          <div className='LoaderBalls__item3'></div>
        </div>
      </div>
      {locationById && (
        <Slideshow key={locationById.id} pictures={locationById.pictures} />
      )}
      {locationById && (
        <LodgingDescription
          title={locationById.title}
          location={locationById.location}
          name={locationById.host.name}
          picture={locationById.host.picture}
          tags={locationById.tags}
          apiRating={locationById.rating}
        />
      )}
      <div className='collapse_group_container'>
        {locationById && (
          <Collapse
            title='Description'
            description={locationById.description}
          />
        )}
        {locationById && (
          <Collapse
            title='Equipements'
            equipment={
              locationById.equipments && (
                <ul>
                  {locationById.equipments.map((equipment) => (
                    <li key={equipment} className='equipments'>
                      {equipment}
                    </li>
                  ))}
                </ul>
              )
            }
          />
        )}
      </div>
    </section>
  );
};

export default Lodging;
