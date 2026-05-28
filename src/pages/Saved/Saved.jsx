import Card from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import data from '../../data/monuments.json';
import { useMonuments } from '../../hooks/useMonuments';
import './Saved.css';

export const Saved = () => {
  // console.log('These are the monuments: %s', JSON.stringify(data));
  const { filters, addToFilters, removeFromFilters, monuments, activeFilters } = useMonuments();

  return (
    <>
      <Header />
      <div>
        <div className="hero">
          <h1>Your Collection</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias obcaecati ipsa omnis, odit suscipit
            numquam dolorum explicabo dolorem eum nam veritatis unde non, placeat ea? Quas possimus id magnam quidem
            enim magn
          </p>
        </div>
        <div className="middle">
          {/* <div className="sidebar"> */}
          <Filters
            filters={filters}
            addToFilters={addToFilters}
            removeFromFilters={removeFromFilters}
            activeFilters={activeFilters}
          />
          {/* </div> */}
          <div className="cards">
            {monuments.map((item) => (
              <Card key={item.id} name={item.name} country={item.country} city={item.city} images={item.images} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
