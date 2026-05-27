import { useParams } from 'react-router';
import monuments from '../../data/monuments.json';

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
    <div>
      <h2>This is the monuments page</h2>
      <h4>{monument.name}</h4>
      <p>{monument.shortDescription}</p>
    </div>
  );
};
