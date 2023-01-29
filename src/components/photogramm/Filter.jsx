const cats = [
  { name: "Усі" },
  { name: "Авто" },
  { name: "Космос" },
  { name: "Архітектура" },
  { name: "Природа" },
];

const Filter = ({ categoryID, setCategoryId, searchValue, setSearchValue }) => (
  <div className="top">
    <ul className="tags">
      {cats.map((obj, i) => (
        <li
          onClick={() => setCategoryId(i)}
          className={categoryID === i ? "active" : ""}
          key={obj.name}
        >
          {obj.name}
        </li>
      ))}
    </ul>
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)} 
      className="search-input"
      placeholder="Пошук за назвою"
    />
  </div>
);

export default Filter;
