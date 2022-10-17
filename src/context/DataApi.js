import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';
// create context
const ApiContext = createContext();


const DataApi = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const getData = () => {
    axios.get('logements.json').then((res) => setLocations(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    // the Provider gives access to the context to its children
    <ApiContext.Provider value={locations}>{children}</ApiContext.Provider>
  );
};

export { ApiContext, DataApi };

