import "./SearchForm.css";
import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const { darkThemeState } = useSelector((state) => state.themeState);

  const { register, handleSubmit, watch } = useForm(/*{ mode: "onblur" }*/);

  return (
    <form
      className={
        darkThemeState ? "searchform searchform_dark-theme" : "searchform"
      }
    >
      <input
        className={
          darkThemeState
            ? "searchform__input searchform__input_dark-theme"
            : "searchform__input"
        }
        type="text"
        placeholder="Поиск хештега"
        aria-label="Поиск хештега"
      ></input>
      <button className="searchform__submit" type="submit"></button>
    </form>
  );
}
