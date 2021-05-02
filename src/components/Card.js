import React from "react";
import Rating from "react-rating";

const Card = ({ cover, title, year, category, description, rate }) => {
  return (
    <div className="card-container">
      <div className="left-container">
        <img src={cover} alt={title} />
      </div>
      <div className="right-container">
        <h2>{title}</h2>
        <div className="info-container">
          <h3>Année : {year}</h3>
          <h3>Genre : {category}</h3>
        </div>
        <div className="description-container">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="rate-container">
          <Rating initialRating={rate} readonly />
        </div>
      </div>
    </div>
  );
};

export default Card;
