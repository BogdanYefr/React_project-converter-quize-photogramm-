import React from 'react';
import { Collection } from '../components/PhotoCollections';

const cats = [
  { "name": "Усі" },
  { "name": "Авто" },
  { "name": "Космос" },
  { "name": "Архітектура" },
  { "name": "Природа" }
];

const pagination = [ 1, 2, 3, 4 ];

function PhotogrammPage () {
  const [categoryID, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsloading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    setIsloading(true);

    const category = categoryID ? `category=${categoryID}` : '';
    

    fetch(`https://638dfe114190defdb7532495.mockapi.io/photos?page=${page}&limit=3&${category}`)
    .then(res => res.json())
    .then(json => setCollections(json))
    .catch(err => {
      console.warn(err);
      alert('Помилка при отриманні даних')
    })
    .finally(() => setIsloading(false))
  }, [categoryID, page]);

  return (
    <div className="PhotoApp">
      <div className="top">
        <ul className="tags">
          {
            cats.map((obj, i) => <li onClick={() => setCategoryId(i)} className={categoryID === i ? 'active' : ''} key={obj.name}>{obj.name}</li>)
          }
        </ul>
        <input 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} 
        className="search-input" 
        placeholder="Пошук за назвою" />
      </div>
      <div className="PhotoContent">
        {isLoading ? (
          <h2>Зачекайте, йде завантаження...</h2>
          ) : (
            collections
            .filter(obj => {return obj.name.toLowerCase().includes(searchValue.toLowerCase())})
            .map((obj, index) => (
          <Collection key={index} name={obj.name} images={obj.photos}/>))
          )}
        
        
      </div>
      <ul className="pagination">
        {pagination.map((element) => (
         <li 
          key={element} 
          onClick={() => setPage(element)} 
          className={page === element ? 'active' : ''}
          >
            {element}
          </li>
         ))}
      </ul>
    </div>
  );
}

export default PhotogrammPage;