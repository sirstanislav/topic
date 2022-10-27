import { React, useState } from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
import More from "../More/More";

export default function Main({ onCardClick }) {
  const [nextToken, setNextToken] = useState(false);

  function loadMore(e) {
    setNextToken(true);
  }

  return (
    <>
      <Cards onCardClick={onCardClick} nextToken={nextToken} />
      <More loadMore={loadMore} />
    </>
  );
}
