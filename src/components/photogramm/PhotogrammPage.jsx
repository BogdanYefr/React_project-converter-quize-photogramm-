import { useEffect, useState } from "react";
import Collections from "./Collections";
import Filter from "./Filter";
import Pagination from "./Pagination";

function PhotogrammPage() {
  const [categoryID, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setIsloading(true);

    const category = categoryID ? `category=${categoryID}` : "";

    fetch(
      `https://638dfe114190defdb7532495.mockapi.io/photos?page=${page}&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((json) => setCollections(json))
      .catch((err) => {  
        console.warn(err);
        alert("Помилка при отриманні даних");
      })
      .finally(() => setIsloading(false)); 
  }, [categoryID, page]); 

  return (
    <div className="PhotoApp">
      <Filter
        categoryID={categoryID}
        setCategoryId={setCategoryId}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Collections
        isLoading={isLoading}
        collections={collections}
        searchValue={searchValue}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default PhotogrammPage;
