import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import './global.css';
/*  import Header from './components/Header/header';  */

import { HomePage } from './pages/Homepage/HomePage';
import { Continents } from './pages/Continents/Continents';
import { Gallery } from './pages/Gallery/Gallery';
import { Saved } from './pages/Saved/Saved';
import { About } from './pages/About/About';
<<<<<<< HEAD
import { Monument } from './pages/Monument/Monument';
=======
>>>>>>> 043a07ecefba31cbc3b8cc1389e47ae2d8ced819

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/monument/:id" element={<Monument />} />
=======
>>>>>>> 043a07ecefba31cbc3b8cc1389e47ae2d8ced819
        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
