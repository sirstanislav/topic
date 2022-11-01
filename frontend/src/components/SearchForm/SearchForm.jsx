import "./SearchForm.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { searchForm } from "../../store/searchFormSlice";

export default function SearchForm() {
  const dispatch = useDispatch();
  const { darkThemeState } = useSelector((state) => state.themeState);

  const { register, handleSubmit, watch, setValue } = useForm(
    /*{ mode: "onblur" }*/ { defaultValues: { inputSearchForm: "" } }
  );
  const inputSearchForm = watch("inputSearchForm");

  const onSubmit = () => {
    dispatch(searchForm(inputSearchForm));
    setValue("inputSearchForm", "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        darkThemeState ? "searchform searchform_dark-theme" : "searchform"
      }
    >
      <input
        {...register("inputSearchForm")}
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
