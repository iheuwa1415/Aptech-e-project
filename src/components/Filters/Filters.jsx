import './Filters.css';


function Filters(props) {
  
  const filters = props.filters;

  console.log(filters)
  
  return (
    <div className="filters">
      <h2>FILTERS</h2>

      

      <input
        type="text"
        placeholder="Search records..."
      />

      
      <div className="stright" >
        <h3>ERA</h3>
        {filters.map((item) => 
        <label>
          <input type="checkbox" />
          {item}
        </label> )}
      </div>
      <div className="stright">
      <h3>REGION</h3>
      </div>
      <div className="stright">
        <h3>UNESCO STATUS</h3>
      </div>
       <div className="stright">
        <h3>UNESCO STATUS</h3>
        <label>
          <input type="checkbox" />
          Listed Site
        </label>

        <label>
          <input type="checkbox" />
          Tentactive List
        </label>
      </div>
      <button className="btn">Clear Filters</button>
    </div>
  );
};

export default Filters;
