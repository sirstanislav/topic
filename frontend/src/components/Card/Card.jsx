import React from "react";
import "./Card.css";

export default function Card({ card, onCardClick }) {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      <img
        src={card.url}
        className="card__image"
        alt="card"
        onClick={handleClick}
      />
    </div>
  );
}
