import Card from "./Card";

const Collections = ({ isLoading, collections, searchValue }) => (
  <div className="PhotoContent">
    {isLoading ? (
      <h2>Зачекайте, йде завантаження...</h2>
    ) : (
      collections
        .filter((collection) => { 
          return collection.name
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        })
        .map((collection) =>
          collection.photos.map((img) => (
            <Card key={img} img={img} name={collection.name} />
          ))
        )
    )}
  </div>
);

export default Collections;
