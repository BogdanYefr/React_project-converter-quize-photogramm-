import React from "react";

export const Collection = ({ name, images }) => {
  return (
    <>
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <h4>{name}</h4>
    </div>
    <div className="collection">
      <img className="collection__big" src={images[1]} alt="Item" />
      <h4>{name}</h4>
    </div>
    <div className="collection">
      <img className="collection__big" src={images[2]} alt="Item" />
      <h4>{name}</h4>
    </div>
    <div className="collection">
      <img className="collection__big" src={images[3]} alt="Item" />
      <h4>{name}</h4>
    </div>
    </>
  );
};