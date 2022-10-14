import React from "react";
import "./Card.css";

export default function Card({ card, onCardClick, index }) {

  console.log(index)

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className={`card ${"area" + index}`}>
      <img
        src={card.url}
        className="card__image"
        alt="card"
        onClick={handleClick}
      />
    </div>
  );
}
