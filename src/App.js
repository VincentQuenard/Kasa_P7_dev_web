// LOGIQUE ROUTES ICI
//On importe après avoir installé react router dom les composants pour faire le routage de nos pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//On importe nos composants des pages 
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route  path='/lodging/:id' element={<Lodging />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
