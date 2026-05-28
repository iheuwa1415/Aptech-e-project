import './mon.css'

const mon = ({historicalSignificance, fullDescription,  images, shortDescription, name}) =>{
    return(
        <>
        <div className="container">
            <div>
                <h2>{historicalSignificance}</h2>
                <p>{fullDescription}</p>
                <img src={images[0]} alt={name} />
                <p>{shortDescription}</p>
                <h2>{name}</h2>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}