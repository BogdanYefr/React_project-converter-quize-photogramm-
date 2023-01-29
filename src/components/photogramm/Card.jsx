const Card = ({ img, name }) => (
  <div className="collection">
    <img className="collection__big" src={img} alt="Item" />
    <h4>{name}</h4>
  </div>
);

export default Card;
