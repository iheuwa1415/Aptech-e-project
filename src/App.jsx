import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import './global.css';
import './pages/Saved/Saved.css'
import './components/Card/Card.css';
import './components/Filters/Filters.css'


import { HomePage } from './pages/Homepage/HomePage';
import { Continents } from './pages/Continents/Continents';
import { Gallery } from './pages/Gallery/Gallery';
import { Saved } from './pages/Saved/Saved';
import { About } from './pages/About/About';
import Card from './components/Card/Card';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Filters" element={<Filters />} />
        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
