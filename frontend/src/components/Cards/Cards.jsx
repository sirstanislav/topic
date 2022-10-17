import React, { useEffect } from "react";
import { useState } from "react";
import { TweetsApi } from "../../api/TweetsApi";
import { linkContext } from "../../utils/LinkContext";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ onCardClick }) {
  const [imageUrl, setImageUrl] = useState([]);
  const [authorId, setAuthorId] = useState([]);
  const headerLink = React.useContext(linkContext);

  useEffect(() => {
    TweetsApi.getTweets(headerLink)
      .then((res) => {
        // console.log(res)
        setImageUrl(res.includes.media);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headerLink]);

  console.log("imageUrl", imageUrl);

  return (
    <section className="cards">
      {imageUrl.map((card, i) => (
        <Card
          key={i}
          card={card}
          onCardClick={onCardClick}
          index={i}
          authorId={authorId}
        />
      ))}
    </section>
  );
}
