import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
import data from '../../data/monuments.json';
import './Saved.css';
import {useDimensions} from '../../hooks/useDimensions';

export const Saved = () => {
  const {width, height} = useDimensions();

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
          <div className="sidebar">
            <Filters />
          </div>
          <div className="cards">
            {data.map((item) => (
              <Card key={item.id} name={item.name} country={item.country} city={item.city} images={item.images} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
