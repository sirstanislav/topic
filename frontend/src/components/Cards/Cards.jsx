import React, { useEffect } from "react";
import { useState } from "react";
import { TweetsApi } from "../../api/TweetsApi";
import { linkContext } from "../../utils/LinkContext";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ onCardClick }) {
  const [tweetsMedia, setTweetsMedia] = useState([]);
  const headerLink = React.useContext(linkContext);

  useEffect(() => {
    TweetsApi.getTweets(headerLink)
      .then((res) => {
        setTweetsMedia(res.includes.media);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headerLink]);

  return (
    <section className="cards">
      {tweetsMedia.map((card, i) => (
        <Card key={i} card={card} onCardClick={onCardClick} />
      ))}
    </section>
  );
}
