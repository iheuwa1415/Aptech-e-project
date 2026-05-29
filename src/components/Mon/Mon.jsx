import './Mon.css'


export const Mon = ({historicalSignificance, fullDescription,  images, shortDescription, name, address, openingHours}) => {
    return(
        <>
        <div className="container2">
            <div className='firstdiv'>
                <h2>{historicalSignificance}</h2>
                <p>{shortDescription}</p>
                <div className="imgag">
                    <img src={images[1]} alt={name} />
                    <img src={images[0]} alt={name} />
                </div>
                <p>{fullDescription}</p>

                <div className="timeline">

                <h2>{name}</h2>

                <div className="timeline-item">
                    <h3>72 AD — Commencement</h3>
                    <p>Description here...</p>
                </div>

                <div className="timeline-item">
                    <h3>80 AD — Inauguration</h3>
                    <p>Description here...</p>
                </div>

                </div>
               
            </div>
            <div className="sidebar">
               <div className="card">
                    <h3>{name}</h3>
                    <img src={images[2]} alt={name} />
                    <p>{address}</p>
                </div>

                <div className="card">
                    <h3>Visitor Facts</h3>
                    <p>Opening Hours</p>
                    <p>opens{openingHours}</p>
                    <p>Admission</p>
                    <p>Architecture Style</p>
                </div>
            </div>
            
        </div>
        </>
    )
}