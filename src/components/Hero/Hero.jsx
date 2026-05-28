import "./Hero.css";


const Hero = ({ name, country, city, images, shortDescription}) => {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${images[4]})`,
        }}
      >
        <div className="h4s">
          <h4 className="abc">{country}</h4>
          <h4 className="acb">{city}</h4>
        </div>
        <h1>{name}</h1>
        <p>{shortDescription}</p>
      </div>
    </>
  );
};

export default Hero;