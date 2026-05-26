import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import './App.css';
import './global.css';

import Footer from './components/Footer/footer';
// 1. Un-comment your real Home component import here:
// import Home from './components/Home/home';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Routes>
        {/* 2. REPLACE THE DIV PLACEHOLDER HERE */}
        {/* Swap it to your real component like this: <Route path="/" element={<Home />} /> */}
        {/* Or use an empty fragment if you aren't ready to render anything yet: */}
        <Route path="/" element={<></>} />
        
        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>

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