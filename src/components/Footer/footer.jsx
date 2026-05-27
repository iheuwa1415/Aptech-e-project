import { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Explore');

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-main">

          {/* Left Section */}
          <div className="footer-brand-section">
            <h3 className="footer-logo">Global Heritage</h3>

            <p className="footer-description">
              ©️ 2026 Global Heritage. Preserving history through modern discovery.
              We are a digital archive dedicated to the immersive exploration of humanity's greatest achievements.
            </p>

            <div className="footer-icons">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="footer-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="footer-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="footer-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12"
                />
              </svg>

            </div>
          </div>

          {/* Right Section */}
          <div className="footer-links-section">

            <div className="footer-column">
              <h4>DISCOVER</h4>

              <ul>
                <li><a href="#europe">Europe</a></li>
                <li><a href="#asia">Asia & Pacific</a></li>
                <li><a href="#americas">Americas</a></li>
                <li><a href="#africa">Africa</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>ORGANIZATION</h4>

              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span className="footer-tagline">
            Designed with reverence for the past.
          </span>
        </div>

      </div>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav">

        <div
          className={`mobile-nav-item ${activeTab === 'Explore' ? 'active' : ''}`}
          onClick={() => setActiveTab('Explore')}
        >
          <span>Explore</span>
        </div>

        <div
          className={`mobile-nav-item ${activeTab === 'Continents' ? 'active' : ''}`}
          onClick={() => setActiveTab('Continents')}
        >
          <span>Continents</span>
        </div>

        <div
          className={`mobile-nav-item ${activeTab === 'Gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('Gallery')}
        >
          <span>Gallery</span>
        </div>

        <div
          className={`mobile-nav-item ${activeTab === 'Saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('Saved')}
        >
          <span>Saved</span>
        </div>

        <div
          className={`mobile-nav-item ${activeTab === 'About' ? 'active' : ''}`}
          onClick={() => setActiveTab('About')}
        >
          <span>About</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;