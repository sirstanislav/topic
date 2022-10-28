import "./Cards.css";
import React, { useEffect, useState } from "react";
import { TweetsApi } from "../../api/tweetsApi";
import { hashtagContext } from "../../utils/hashtagContext";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { nextPage } from "../../store/buttonStateSlice";

export default function Cards({ onCardClick }) {
  const [alltweets, setAllTweets] = useState([]);
  const headerLink = React.useContext(hashtagContext);
  const nextPageState = useSelector((state) => state.buttonState.nextPage);
  const [nextToken, setNextToken] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    TweetsApi.getTweets(
      headerLink ? headerLink : "#sitnikfriday",
      nextToken

    )
      .then((res) => {
        console.log("RES", res);
        const mediaAndTweetId = res.data.map((data) => {
          const mediaKeys = {};
          if (data.attachments) {
            // very rare the attachments don't coming from API
            for (let i = 0; i < data.attachments.media_keys.length; i++) {
              mediaKeys[i] = data.attachments.media_keys[i];
            }
            return {
              ...mediaKeys,
              tweetId: data.id,
            };
          } else {
            for (let i = 0; i < data.entities.urls.length; i++) {
              mediaKeys[i] = data.entities.urls[i];
            }
            return {
              ...mediaKeys,
              tweetId: data.id,
            };
          }
        });

        const userName = mediaAndTweetId.map((el, i) => {
          return { ...el, ...res.includes.users[i] };
        });

        const tweetInfo = res.includes.media.map((item) => {
          return {
            ...userName.filter((el) =>
              Object.values(el).some((media) => {
                return media === item.media_key;
              })
            ),
            ...item,
          };
        });
        setAllTweets(tweetInfo);
        setNextToken(res.meta.next_token);
        dispatch(nextPage(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headerLink, nextPageState]);

  return (
    <section className="cards">
      {alltweets.map((card, i) => (
        <Card key={i} card={card} onCardClick={onCardClick} index={i} />
      ))}
    </section>
  );
}
