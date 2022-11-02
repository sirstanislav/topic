import "./Cards.css";
import Card from "../Card/Card";
import React, { useEffect } from "react";
import { TweetsApi } from "../../api/tweetsApi";
import { tweets } from "../../store/tweetsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cards({ onCardClick }) {
  const dispatch = useDispatch();
  const banList = localStorage.getItem("banList");
  const { tweetsState } = useSelector((state) => state.tweetsState);
  const { hashtagValue } = useSelector((state) => state.hashtagValue);

  useEffect(() => {
    TweetsApi.getTweets(hashtagValue ? hashtagValue : "#sitnikfriday", banList)
      .then((res) => {
        console.log("RES", res);
        const mediaAndTweetsId = res.data.map((data) => {
          const mediaKeys = {};
          if (data.attachments) {
            // very rare the attachments don't coming from API
            for (let i = 0; i < data.attachments.media_keys.length; i++) {
              mediaKeys[i] = data.attachments.media_keys[i];
            }
            return {
              ...mediaKeys,
              tweetId: data.id,
              authorId: data.author_id,
            };
          } else {
            for (let i = 0; i < data.entities.urls.length; i++) {
              mediaKeys[i] = data.entities.urls[i];
            }
            return {
              ...mediaKeys,
              tweetId: data.id,
              authorId: data.author_id,
            };
          }
        });

        const userName = mediaAndTweetsId.map((el, i) => {
          return {
            ...res.includes.users.find((item) => {
              return item.id === el.authorId ? item.username : null;
            }),
            ...el,
          };
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
        dispatch(tweets(tweetInfo));
      })
      .catch((err) => {
        console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [banList, dispatch]);

  return (
    <section className="cards">
      {tweetsState.map((card, i) => (
        <Card key={i} card={card} onCardClick={onCardClick} index={i} />
      ))}
    </section>
  );
}
