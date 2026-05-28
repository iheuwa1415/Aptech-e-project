import { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Explore');

  // Inline style overrides to guarantee semantic token application
  const footerStyle = {
    backgroundColor: 'var(--bg-surface)', 
    borderTop: '1px solid var(--border-default)', 
    width: '100%',
    padding: '60px 40px 30px',
    boxSizing: 'border-box'
  };

  const textPrimaryStyle = {
    color: 'var(--text-primary)', 
    fontFamily: 'var(--font-heading)'
  };

  const textSecondaryStyle = {
    color: 'var(--text-secondary)' 
  };

  const headingStyle = {
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-caption-size)',
    fontWeight: '700',
    letterSpacing: '0.12em',
    margin: '0 0 20px 0',
    whiteSpace: 'nowrap' 
  };

  // Safe text-based icon sizing styling
  const glyphIconStyle = {
    fontSize: '20px',
    color: 'var(--text-primary)',
    lineHeight: '1',
    display: 'inline-block',
    userSelect: 'none'
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-container">

        <div className="footer-main">
          {/* Left Brand Profile Section */}
          <div className="footer-brand-section">
            <h3 className="footer-logo" style={textPrimaryStyle}>Global Heritage</h3>

            <p className="footer-description" style={textSecondaryStyle}>
              © 2024 Global Heritage. Preserving history through modern discovery. 
              We are a digital archive dedicated to the immersive exploration 
              of humanity's greatest achievements.
            </p>

            {/* Indestructible Text Glyphs replacing broken SVGs */}
            <div className="footer-icons" style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
              {/* Globe Glyph */}
              <span style={glyphIconStyle} title="Globe">🌐</span>
              
              {/* Classical Museum/Home Columns Glyph */}
              <span style={glyphIconStyle} title="Museum">🏛</span>
              
              {/* Archive Tag / Book Glyph */}
              <span style={glyphIconStyle} title="Archive">🏷</span>
            </div>
          </div>

          {/* Right Links Directory Section */}
          <div className="footer-links-section" style={{ display: 'flex', gap: '72px' }}>
            <div className="footer-column">
              <h4 style={headingStyle}>DISCOVER</h4>
              <ul>
                <li><a href="#europe" style={textSecondaryStyle}>Europe</a></li>
                <li><a href="#asia" style={textSecondaryStyle}>Asia & Pacific</a></li>
                <li><a href="#americas" style={textSecondaryStyle}>Americas</a></li>
                <li><a href="#africa" style={textSecondaryStyle}>Africa</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 style={headingStyle}>ORGANIZATION</h4>
              <ul>
                <li><a href="#privacy" style={textSecondaryStyle}>Privacy Policy</a></li>
                <li><a href="#terms" style={textSecondaryStyle}>Terms of Service</a></li>
                <li><a href="#accessibility" style={textSecondaryStyle}>Accessibility</a></li>
                <li><a href="#contact" style={textSecondaryStyle}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid var(--border-default)', paddingTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
          <span className="footer-tagline" style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: 'var(--text-caption-size)' }}>
            Designed with reverence for the past.
          </span>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="mobile-bottom-nav">
        <div className={`mobile-nav-item ${activeTab === 'Explore' ? 'active' : ''}`} onClick={() => setActiveTab('Explore')}>
          <span>Explore</span>
        </div>
        <div className={`mobile-nav-item ${activeTab === 'Gallery' ? 'active' : ''}`} onClick={() => setActiveTab('Gallery')}>
          <span>Gallery</span>
        </div>
        <div className={`mobile-nav-item ${activeTab === 'Saved' ? 'active' : ''}`} onClick={() => setActiveTab('Saved')}>
          <span>Saved</span>
        </div>
        <div className={`mobile-nav-item ${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>
          <span>About</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;