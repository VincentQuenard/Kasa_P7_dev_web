import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import LodgingDescription from '../components/LodgingDescription';
import Slideshow from '../components/Slideshow';

const Lodging = () => {
  const { id } = useParams();
  const [locationById, setlocation] = useState(null);
  const getData = () => {
    axios.get('../logements.json').then((res) => {
      const locationById = res.data.find((location) => location.id === id);
      setlocation(locationById);
    });
  };
  useEffect(() => {
    getData();
  });

  // const locations = useContext(ApiContext);
  // On récupère l'id de la location dans l'url grace à useParams de react router

  //composant slideshow paramètré avec props pictures donc pictures = tableau filtré avec id match et on recupère les photos
  return (
    <div>
      {locationById && (
        <Slideshow key={locationById.id} pictures={locationById.pictures} />
      )}
      {locationById && (
        <LodgingDescription
          title={locationById.title}
          location={locationById.location}
          name={locationById.host.name}
          picture={locationById.host.picture}
        />
      )}
    </div>
  );
};

export default Lodging;
