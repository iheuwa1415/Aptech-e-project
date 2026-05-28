import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters"
import worldwonder from "../../worldwonder.json";
import './Saved.css';
import { useState } from 'react';



export const Saved = () => {

  const [data, setData] = useState(worldwonder);

  const filterItems = new Set(data.flatMap(d => d.tags.map(t => t))).values();
  // const filterItems = data.flatMap(d => d.tags.map(t => t));

  return (
    <>
      <Header />
      <div className='saved-container'>
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
              <Filters filters={filterItems} /> 
          {/* </div> */}
          <div className='cards'>
          {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            country={item.country}
            city={item.city}
            images={item.images}
              /> 
            ))}
          </div>
        </div> 
      </div>
      <Footer />
    </>
  );
};
