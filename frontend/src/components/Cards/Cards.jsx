import React, { useEffect } from "react";
import { useState } from "react";
import { TweetsApi } from "../../api/TweetsApi";
import { linkContext } from "../../utils/LinkContext";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards() {
  const [tweetsMedia, setTweetsMedia] = useState([]);
  const headerLink = React.useContext(linkContext);

  useEffect(() => {
    TweetsApi.getTweets(headerLink)
      .then((res) => {
        console.log("res:", res)
        setTweetsMedia(res.includes.media);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headerLink]);

  console.log("quanto:", tweetsMedia);

  return (
    <section className="cards">
      {tweetsMedia.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </section>
  );
}
