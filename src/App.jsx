import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './global.css';
import Feedback from './components/Feedback/Feedback';
import './components/Feedback/Feedback.css';
import ContactAndFeedback from './pages/ContactAndFeedback';

const HomePage = () => (
  <div style={{ padding: 40 }}>
    <h1>Welcome</h1>
    <p>This demo exposes the Contact and Feedback pages.</p>
    <p>
      <Link to="/contact">Contact Us</Link> |{' '}
      <Link to="/feedback">Feedback</Link>
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactAndFeedback />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;