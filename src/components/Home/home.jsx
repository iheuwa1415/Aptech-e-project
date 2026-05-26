import Button from '../buttons/button'; 
import './home.css';

const Home = () => {
  const handleBeginJourney = () => console.log("Journey initiated...");
  const handleViewAllMonuments = () => console.log("Loading all monuments gallery...");
  const handleExploreRecord = (monument) => console.log(`Exploring ${monument}...`);
  const handleReadChapter = () => console.log("Opening featured chapter...");

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-subtitle">THE CRADLE OF CIVILIZATION</span>
            <h1 className="hero-title">Witness the Majesty of<br />the Eternal Sands.</h1>
            <div className="hero-action">
              <Button text="BEGIN JOURNEY" variant="solid" onClick={handleBeginJourney} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRENDING MONUMENTS SECTION */}
      <section className="trending-section">
        <div className="trending-header">
          <div>
            <h2>Trending Monuments</h2>
            <p>Explore the destinations capturing the imagination of historians and travelers worldwide this season.</p>
          </div>
          <div className="trending-action-btn">
            <Button text="VIEW ALL" variant="outline" onClick={handleViewAllMonuments} />
          </div>
        </div>

        {/* Dynamic Row: Main Monument + Discovery of the Week Sidecard */}
        <div className="monuments-layout-grid">
          
          {/* Left Large Card: The Flavian Amphitheatre */}
          <div className="main-monument-card">
            <div className="card-image-wrapper">
              {/* CHANGE THIS PATH TO YOUR COLOSSEUM IMAGE */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Roma06(js).jpg" alt="The Flavian Amphitheatre" />
            </div>
            <div className="card-body-content">
              <span className="card-location">ROME, ITALY</span>
              <h3>The Flavian Amphitheatre</h3>
              <p>Standing as a testament to Roman engineering, the Colosseum remains the largest ancient amphitheatre ever built, hosting spectacular gladiatorial contests that defined an empire.</p>
              <span className="card-date-badge">Built 70–80 AD</span>
              <button className="text-link-btn" onClick={() => handleExploreRecord('Colosseum')}>
                EXPLORE RECORD →
              </button>
            </div>
          </div>

          {/* Right Smaller Sidecard: Discovery of the Week (Taj Mahal) */}
          <div className="side-discovery-card">
            <span className="discovery-label-heading">DISCOVERY OF THE WEEK</span>
            <div className="side-card-inner">
              <div className="side-image-wrapper">
                {/* CHANGE THIS PATH TO YOUR TAJ MAHAL IMAGE */}
                <img src="https://tse1.mm.bing.net/th/id/OIP.CwueT309dJAWbnmfjR2pEwHaE9?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Taj Mahal" />
              </div>
              <div className="side-card-body">
                <h3>Taj Mahal</h3>
                <p>A symmetrical masterpiece of Mughal architecture.</p>
                <button className="text-link-btn" onClick={() => handleExploreRecord('Taj Mahal')}>
                  EXPLORE RECORD →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SPECIAL EXHIBITION SECTION */}
      <section className="exhibition-section">
        <div className="exhibition-container">
          <div className="exhibition-image-side">
            {/* CHANGE THIS PATH TO YOUR PETRA IMAGE */}
            <img src="https://tse3.mm.bing.net/th/id/OIP.vu3Xj7XVKFuWPRtrbYvc4QHaGW?rs=1&pid=ImgDetMain&o=7&rm=3" alt="The Echoes of Petra" />
          </div>
          <div className="exhibition-text-side">
            <span className="exhibition-badge">SPECIAL EXHIBITION</span>
            <h2>The Echoes of Petra: A City Carved from Time</h2>
            <p className="exhibition-intro">In the heart of the Jordanian desert lies a marvel of the ancient world. Known as the Rose City due to the color of the stone out of which it is carved, Petra stands as a symbol of resilience and artistic brilliance.</p>
            <p className="exhibition-details">Our latest digital chapter explores the Nabataean civilization's mastery of water management and trade, revealing how they transformed a barren canyon into a thriving metropolis.</p>
            <div className="exhibition-action">
              <Button text="READ FEATURED CHAPTER" variant="solid" onClick={handleReadChapter} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHRONOLOGY OF CIVILIZATION TIMELINE SECTION */}
      <section className="chronology-section">
        <h2 className="chronology-main-title">Chronology of Civilization</h2>
        
        <div className="timeline-horizontal-grid">
          
          {/* Timeline Node 1 */}
          <div className="timeline-node">
            <div className="node-header">
              <span className="node-year">2560 BC</span>
              <h4>The Great Pyramid</h4>
            </div>
            <p>Completed as a tomb for Pharaoh Khufu, remaining the tallest man-made structure for over 3,800 years.</p>
          </div>

          {/* Timeline Node 2 */}
          <div className="timeline-node">
            <div className="node-header">
              <span className="node-year">447 BC</span>
              <h4>The Acropolis</h4>
            </div>
            <p>The center of Athenian democracy and the site of the Parthenon, reflecting the pinnacle of Classical Greek art.</p>
          </div>

          {/* Timeline Node 3 */}
          <div className="timeline-node">
            <div className="node-header">
              <span className="node-year">1450 AD</span>
              <h4>Machu Picchu</h4>
            </div>
            <p>The legendary Incan citadel set high in the Andes Mountains of Peru, an architectural marvel of dry-stone walls.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;