import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="product-card">
      <img src={props.img} className="product-card-img" alt={props.title} />
      <div className="product-card-body">
        <h2 className="product-card-title">{props.title}</h2>
      </div>
    </div>
  );
}

export default Card;
