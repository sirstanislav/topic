import "./SearchForm.css";
import React from "react";

export default function SearchForm() {
  return (
    <form className="searchform">
      <input
        className="searchform__input"
        type="text"
        placeholder="Поиск хештега"
        aria-label="Поиск хештега"
      ></input>
    </form>
  );
}
