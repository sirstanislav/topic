import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";

export default function Main({ onCardClick }) {
  return <Cards onCardClick={onCardClick} />;
}
