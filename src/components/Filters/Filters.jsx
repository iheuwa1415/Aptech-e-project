function Filters() {
  return (
    <div className="filters">

      <h2>FILTERS</h2>

      <input
        type="text"
        placeholder="Search records..."
      />

      <h3>ERA</h3>

      <label>
        <input type="checkbox" />
        Pre-history
      </label>

      <label>
        <input type="checkbox" />
        Ancient
      </label>

      <label>
        <input type="checkbox" />
        Medieval
      </label>

      <label>
        <input type="checkbox" />
        Renaissance
      </label>

    </div>
  );
}

export default Filters;