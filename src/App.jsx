import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import './App.css';
import './global.css';
/* import Header from './components/Header/header';  */

import Footer from './components/Footer/footer';
// Notice the lowercase "p" in "./pages/..." below:
import { HomePage } from './pages/Homepage/HomePage';
import { Continents } from './pages/Continents/Continents';
import { Gallery } from './pages/Gallery/Gallery';
import { Saved } from './pages/Saved/Saved';
import { About } from './pages/About/About';

function AppContent() {
  const location = useLocation();

  // Checks if the user is exactly on the root home page path
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>

      {/* Your global footer switches layouts smoothly based on the page route! */}
      <Footer isHomePage={isHomePage} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;