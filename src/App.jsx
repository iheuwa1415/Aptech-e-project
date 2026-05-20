import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import './global.css';
/*  import Header from './components/Header/header';  */

import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
