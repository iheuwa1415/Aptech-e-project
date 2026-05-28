import { useParams } from 'react-router';
import monuments from '../../data/monuments.json';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';


export const Monument = () => {
  //DO NOT TOUCH!
  let { id } = useParams();

  //DO NOT TOUCH!
  let monument = monuments.filter((m) => m.id.toString() === id.toString())[0];

  console.log('This is the id: %d', id);
  //   console.log('These are the monuments: %s', JSON.stringify(monuments));
  console.log('This is the monument: ');
  console.log(monument);

  return (
    <>
      <Header />

      <Hero  key={monument.id}
            name={monument.name}
            country={monument.country}
            city={monument.city}
            images={monument.images}
            description={monument.shortDescription}
      />
      {/* <div>
        <h2>This is the monuments page</h2>
        <h4>{monument.name}</h4>
        <p>{monument.shortDescription}</p>
      </div> */}
      <Footer />
    </>
  );
};
