import "./Cards.css";
import Card from "../Card/Card";
import { TweetsApi } from "../../api/tweetsApi";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage } from "../../store/buttonStateSlice";
import { hashtagContext } from "../../utils/hashtagContext";

export default function Cards({ onCardClick }) {
  const dispatch = useDispatch();
  const [alltweets, setAllTweets] = useState([]);
  // const [nextToken, setNextToken] = useState("");
  const headerLink = React.useContext(hashtagContext);
  const nextPageState = useSelector((state) => state.buttonState.nextPageState);
  const banList = localStorage.getItem("banList");

  console.log(nextPageState);

  const loadTweets = () => {
    TweetsApi.getTweets(
      headerLink ? headerLink : "#sitnikfriday",
      // nextToken,
      banList
    )
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
          // return { ...el, ...res.includes.users[i] };
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
        // setNextToken(res.meta.next_token);
        dispatch(nextPage(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadTweets();
  }, [headerLink, banList]);

  return (
    <section className="cards">
      {alltweets.map((card, i) => (
        <Card key={i} card={card} onCardClick={onCardClick} index={i} />
      ))}
    </section>
  );
}
