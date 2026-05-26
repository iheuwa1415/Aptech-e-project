import './Card.css';

const Card = ({ name, country, city, images }) => {
  return (
    <div className="card">
      <img src={images[3]} alt={name} />

      <h4>GH-0412</h4>
      <h1>{name}</h1>
      <h4>
        📍{country}, {city}{' '}
      </h4>
      <h3>VIEW FULL RECORD</h3>
    </div>
  );
};

export default Card;
