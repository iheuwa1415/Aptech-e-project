import './Filters.css';

function Filters({ filters, addToFilters, removeFromFilters }) {
  // const filters = props.filters;

  // console.log(filters);

  // const [activeFilters, setActiveFilters] = useState(null);

  return (
    <div className="filters">
      <h2>FILTERS</h2>

      <input type="text" placeholder="Search records..." />

      <div className="stright">
        <h3>ERA</h3>
        {filters.map((item, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={item}
              id={`filter${index}`}
              onChange={(e) => {
                if (e.target.checked) {
                  console.log(`${item} is checked`);
                  addToFilters(item);
                } else {
                  console.log(`${item} is not checked`);
                  removeFromFilters(item);
                }
                // return handleFilter();
              }}
            />
            {item}
          </label>
        ))}
      </div>
      <div className="stright">
        <h3>REGION</h3>
      </div>
      <div className="stright">
        <h3>UNESCO STATUS</h3>
      </div>
      <div className="stright">
        <h3>UNESCO STATUS</h3>
        {/* <label>
          <input type="checkbox" />
          Listed Site
        </label>

        <label>
          <input type="checkbox" />
          Tentactive List
        </label> */}
      </div>
      <button className="btn">Clear Filters</button>
    </div>
  );
}

export default Filters;
