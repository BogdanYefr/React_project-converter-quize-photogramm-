const pagination = [1, 2, 3, 4];

const Pagination = ({ page, setPage }) => (
  <ul className="pagination">
    {pagination.map((element) => (
      <li
        key={element}
        onClick={() => setPage(element)}
        className={page === element ? "active" : ""}
      >
        {element}
      </li>
    ))}
  </ul>
);

export default Pagination;
