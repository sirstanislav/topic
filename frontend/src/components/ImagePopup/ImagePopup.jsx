import "./ImagePopup.css";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function ImagePopup({ card, onClose }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(card);
  }, [card]);

  const url = `https://twitter.com/${
    userName.isOpen ? userName[0].username : null
  }/status/${userName.isOpen ? userName[0].tweetId : null}`;

  return (
    <section
      className={`popup ${card.isOpen && "popup_enable"}`}
      onClick={onClose}
    >
      <div className="popup__image">
        {console.log(card)}
        {card.type === "photo" ? (
          <img className="popup__image-full" src={card.url} alt="" />
        ) : (
          <video
            controls
            className="popup__image-full"
            // autoPlay
            muted
            // loop
            src={card.isOpen ? card.variants[3].url : null}
            alt=""
          />
        )}

        <a className="card__url" href={url} target="_blank" rel="noreferrer">
          <h2 className="popup__image-title">
            {card.isOpen ? `@${card[0].username}` : null}
          </h2>
        </a>
        <button
          className="popup__close"
          onClick={onClose}
          type="reset"
          aria-label="close"
        ></button>
      </div>
    </section>
  );
}
