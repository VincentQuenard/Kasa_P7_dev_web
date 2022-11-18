import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LodgingDescription from '../components/Lodging/LodgingDescription';
import Collapse from '../components/Collapse';
import Gallery from '../components/Lodging/Gallery';

const Lodging = () => {
  const { id } = useParams();
  const [locations, setLocations] = useState([]);
  /**
   * GetData() is a function that uses axios to get data from a json file and then sets the data to the
   * locations variable.
   */
  const getData = () => {
    axios.get('../logements.json').then((res) => setLocations(res.data));
  };
  /* It's getting the data from the json file. */
  useEffect(() => {
    getData();
  }, []);

  /* It's displaying a progress bar if  locations  is empty. */
  if (locations.length <= 0 || !locations) {
    return <progress></progress>;
  }
  /* It's finding the location by id. */
  const locationById = locations.find((location) => location.id === id);

  /* It's checking if the locationById variable is empty. If it is, it's redirecting to the 404 page. */
  if (!locationById) {
    return <Navigate to='/404' />;
  }

  //composants paramètrés avec props des composants enfants
  return (
    <section>
      {locationById && (
        <div>
          <Gallery key={locationById.id} pictures={locationById.pictures} />
          <LodgingDescription
            title={locationById.title}
            location={locationById.location}
            name={locationById.host.name}
            picture={locationById.host.picture}
            tags={locationById.tags}
            apiRating={locationById.rating}
          />
          <div className='collapse_group_container'>
            <Collapse
              title='Description'
              description={locationById.description}
            />
            <Collapse
              title='Equipements'
              description={
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Lodging;
