// LOGIQUE ROUTES ICI
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//On importe après avoir installé react router dom les composants pour faire le routage de nos pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//On importe nos composants des pages 
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { createContext } from 'react';

export const ApiContext = createContext([])

function App() {
const [locations, setLocations] = useState([]);
const getData = () => {
  axios.get('/logements.json').then((res) => setLocations(res.data));
};
useEffect(() => {
  getData();
}, []);



  return (
    <BrowserRouter>
    <ApiContext.Provider value={locations}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route  path='/lodging/:id' element={<Lodging />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </ApiContext.Provider>
    </BrowserRouter>
  );
}

export default App;
