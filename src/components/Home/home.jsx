import Button from '../Button/Button';
import LiveTicker from '../Ticker/Ticker';
import './Home.css';
const Home = () => {
  const handleBeginJourney = () => {
    console.log("Journey initiated...");
  };
  const handleViewAllMonuments = () => {
    console.log("Loading all monuments gallery...");
  };
  const handleExploreRecord = (monument) => {
    console.log(`Exploring ${monument}...`);
  };
  const handleReadChapter = () => {
    console.log("Opening featured chapter...");
  };
  return (
    <div className="home-page">
      <LiveTicker />
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-subtitle">
              THE CRADLE OF CIVILIZATION
            </span>
            <h1 className="hero-title">
              Witness the Majesty of
              <br />
              the Eternal Sands.
            </h1>
            <div className="hero-action">
              <Button
                variant="btn-solid"
                text="Begin Journey"
                onClick={handleBeginJourney}
              />
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
          TRENDING MONUMENTS
      ========================================================= */}
      <section className="trending-section">
        <div className="trending-header">
          <div>
            <h2>Trending Monuments</h2>
            <p>
              Explore the destinations capturing the imagination
              of historians and travelers worldwide this season.
            </p>
          </div>
          <div className="trending-action-btn">
            <Button
              variant="btn-solid"
              text="VIEW ALL"
              onClick={handleViewAllMonuments}
            />
          </div>
        </div>
        <div className="monuments-layout-grid">
          {/* MAIN CARD */}
          <div className="main-monument-card">
            <div className="card-image-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Roma06(js).jpg"
                alt="The Flavian Amphitheatre"
              />
            </div>
            <div className="card-body-content">
              <span className="card-location">
                ROME, ITALY
              </span>
              <h3>The Flavian Amphitheatre</h3>
              <p>
                Standing as a testament to Roman engineering,
                the Colosseum remains the largest ancient
                amphitheatre ever built.
              </p>
              <span className="card-date-badge">
                Built 70–80 AD
              </span>
              <button
                className="text-link-btn"
                onClick={() => handleExploreRecord('Colosseum')}
              >
                EXPLORE RECORD →
              </button>
            </div>
          </div>
          {/* SIDE CARD */}
          <div className="side-discovery-card">
            <span className="discovery-label-heading">
              DISCOVERY OF THE WEEK
            </span>
            <div className="side-card-inner">
              <div className="side-image-wrapper">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.CwueT309dJAWbnmfjR2pEwHaE9?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Taj Mahal"
                />
              </div>
              <div className="side-card-body">
                <h3>Taj Mahal</h3>
                <p>
                  A symmetrical masterpiece of Mughal architecture.
                </p>
                <button
                  className="text-link-btn"
                  onClick={() => handleExploreRecord('Taj Mahal')}
                >
                  EXPLORE RECORD →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
          SPECIAL EXHIBITION
      ========================================================= */}
      <section className="exhibition-section">
        <div className="exhibition-container">
          <div className="exhibition-image-side">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.vu3Xj7XVKFuWPRtrbYvc4QHaGW?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="The Echoes of Petra"
            />
          </div>
          <div className="exhibition-text-side">
            <span className="exhibition-badge">
              SPECIAL EXHIBITION
            </span>
            <h2>
              The Echoes of Petra:
              <br />
              A City Carved from Time
            </h2>
            <p className="exhibition-intro">
              In the heart of the Jordanian desert lies a marvel
              of the ancient world.
            </p>
            <p className="exhibition-details">
              Our latest digital chapter explores the Nabataean
              civilization's mastery of water management and trade.
            </p>
            <div className="exhibition-action">
              <Button
                variant="btn-solid"
                text="READ FEATURED CHAPTER"
                onClick={handleReadChapter}
              />
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
          CHRONOLOGY TIMELINE
      ========================================================= */}
      <section className="chronology-section">
        <h2 className="chronology-main-title">
          Chronology of Civilization
        </h2>
        <div className="timeline-vertical-container">
          {/* ITEM 1 */}
          <div className="timeline-row">
            <div className="timeline-left">
              <span className="node-year">
                2560 BC
              </span>
              <h4>The Great Pyramid</h4>
            </div>
            <div className="timeline-center">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-right">
              <p>
                Completed as a tomb for Pharaoh Khufu,
                remaining the tallest man-made structure
                for over 3,800 years.
              </p>
            </div>
          </div>
          {/* ITEM 2 */}
          <div className="timeline-row">
            <div className="timeline-left">
              <p>
                The center of Athenian democracy and the
                site of the Parthenon, reflecting the
                pinnacle of Classical Greek art.
              </p>
            </div>
            <div className="timeline-center">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-right">
              <span className="node-year">
                447 BC
              </span>
              <h4>The Acropolis</h4>
            </div>
          </div>
          {/* ITEM 3 */}
          <div className="timeline-row">
            <div className="timeline-left">
              <span className="node-year">
                1450 AD
              </span>
              <h4>Machu Picchu</h4>
            </div>
            <div className="timeline-center">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-right">
              <p>
                The legendary Incan citadel set high in
                the Andes Mountains of Peru, an
                architectural marvel of dry-stone walls.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;