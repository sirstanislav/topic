import { React } from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";

export default function Main({ onCardClick }) {
  return (
    <>
      <Cards onCardClick={onCardClick} />
      <Pagination />
    </>
  );
}
