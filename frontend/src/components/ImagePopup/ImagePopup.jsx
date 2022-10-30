import "./ImagePopup.css";
import React from "react";
import { useState, useEffect } from "react";

export default function ImagePopup({ card, onClose }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(card);
  }, [card]);

  const url = `https://twitter.com/${
    userName.isOpen ? userName[0].username : null
  }/status/${userName.isOpen ? userName[0].tweetId : null}`;

  return (
    <section className={`popup ${card.isOpen && "popup_enable"}`}>
      <div className="popup__image">
        {card.type === "photo" ? (
          <img
            className="popup__image-full"
            onClick={onClose}
            src={card.url}
            alt=""
          />
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
        <div className="popup__image-title">
          <a className="popup__url" href={url} target="_blank" rel="noreferrer">
            {card.isOpen ? `@${card[0].username}` : null}
          </a>
          <div
            className="popup__ban"
            onClick={() => {
              const oldBanList = localStorage.getItem("banList");
              localStorage.setItem(
                "banList",
                oldBanList
                  ? oldBanList + `-from:${card[0].username} `
                  : `-from:${card[0].username} `
              );
            }}
          >
            BAN
          </div>
        </div>
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
