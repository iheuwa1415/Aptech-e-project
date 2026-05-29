import './Mon.css'


export const Mon = ({historicalSignificance, fullDescription,  images, shortDescription, name, address, openingHours, closingHours,
    local, foreign, architecturalStyle
}) => {
    return(
        <>
        <div className="container2">
            <div className='firstdiv'>
                <h2>Description</h2>
                <p>{shortDescription}</p>
                <div className="imgag">
                    <img src={images[1]} alt={name} />
                    <img src={images[0]} alt={name} />
                </div>
                <p>{fullDescription}</p>

            <div className="timeline">

                <h2>Historical Significance</h2>
                {
                    historicalSignificance.map(h => (

                        <div className="timeline-item">
                            <p>{h}</p>
                        </div>
                    ))
                }


                

                <div className="timeline-item">
                    <h3>80 AD — Inauguration</h3>
                    <p>{historicalSignificance[1]}</p>
                </div>

                <div className="timeline-item">
                    <h3>217 AD — The Great Fire</h3>
                    <p>{historicalSignificance[2]}</p>
                </div>

                <div className="timeline-item">
                    <h3>1349 AD — Inauguration</h3>
                    <p>{historicalSignificance[3]}</p>
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
                    <h4>Opening Hours</h4>
                    <p>Daily {openingHours} - {closingHours}</p>
                    <h4>Admission</h4>
                    <p>Local Price: {local}</p>
                    <p>Foreign Price: {foreign}</p>
                    <h4>Architecture Style</h4>
                    <p>{architecturalStyle}</p>
                </div>
            </div>
            
        </div>
        </>
    )
}