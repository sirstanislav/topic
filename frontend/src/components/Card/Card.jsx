import React from "react";
import "./Card.css";

export default function Card({ card, onCardClick, index }) {
  console.log("card", card);

  function handleClick() {
    onCardClick(card);
  }

  // const url = `https://twitter.com/${card[0].username}/status/${card[0].tweetId}`;

  return (
    <div
      className={`card ${"area" + index}`}
      style={{ gridArea: `area${index}` }}
    >
      {card.url ? (
        <img
          src={card.url}
          className="card__image"
          alt="card"
          onClick={handleClick}
        />
      ) : (
        <img
          src={card.preview_image_url}
          className="card__image"
          alt="card"
          onClick={handleClick}
        />
      )}
      {/* <a className="card__url" href={url} target="_blank" rel="noreferrer">
        <p className="card__title">{`@${card[0].username}`}</p>
      </a> */}
    </div>
  );
}
