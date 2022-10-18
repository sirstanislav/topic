import React, { useEffect } from "react";
import { useState } from "react";
import { TweetsApi } from "../../api/TweetsApi";
import { linkContext } from "../../utils/LinkContext";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ onCardClick }) {
  const [imageUrl, setImageUrl] = useState([]);
  const [tweetInfo, setTweetInfo] = useState([]);
  const headerLink = React.useContext(linkContext);

  useEffect(() => {
    TweetsApi.getTweets(headerLink)
      .then((res) => {
        console.log("RES:", res);
        setImageUrl(res.includes.media);

        const mediaAndTweetId = res.data.map((data) => {
          return {
            media: data.attachments,
            tweetId: data.id,
          };
        });

        const authorIdAndUserName = res.includes.users.map((user) => {
          return { authorId: user.id, username: user.username };
        });

        const joinAll = mediaAndTweetId.map((e, i) => {
          return [e, authorIdAndUserName[i]];
        });

        const tweetInfo = joinAll.map((item) => {
          console.log("item", item);
          return {
            media: item[0].media,
            tweetId: item[0].tweetId,
            username: item[1].username,
            authorId: item[1].authorId,
          };
        });
        setTweetInfo(tweetInfo);

        // console.log("mediaAndTweetId:", mediaAndTweetId);
        // console.log("authorIdAndUserName:", authorIdAndUserName);
        // console.log("joinAll:", joinAll);
        console.log("tweetInfo:", tweetInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headerLink]);

  return (
    <section className="cards">
      {imageUrl.map((card, i) => (
        <Card
          key={i}
          card={card}
          onCardClick={onCardClick}
          index={i}
          tweetInfo={tweetInfo}
        />
      ))}
    </section>
  );
}
