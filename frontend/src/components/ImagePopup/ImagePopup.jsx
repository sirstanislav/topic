import "./ImagePopup.css";

import React from "react";

export default function ImagePopup({ card, onClose }) {
  console.log("card:", card);
  return (
    <section
      className={`popup ${card.isOpen && "popup_enable"}`}
      onClick={onClose}
    >
      <div className="popup__image">
        <img className="popup__image-full" src={card.url} alt="" />
        <h2 className="popup__image-title">{card.type}</h2>
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
