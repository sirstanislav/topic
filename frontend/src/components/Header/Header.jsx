import "./Header.css";
import React from "react";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { TweetsApi } from "../../api/tweetsApi";
import { tweets } from "../../store/tweetsSlice";
import { hashtag } from "../../store/hashtagSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const banList = localStorage.getItem("banList");
  const searchForm = useSelector((state) => state.searchValue);
  const navigate = useNavigate()

  function displayStyle(position) {
    if (active === position) {
      return "block";
    } else {
      return "";
    }
  }

  useEffect(() => {
    setActive(5);
  }, [searchForm]);

  const callApi = (hashtag) => {
    TweetsApi.getTweets(hashtag, banList)
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
  };

  return (
    <div className="header">
      {<SearchForm />}
      <div className="header__links">
        <div
          className={"header__link"}
          onClick={(e) => {
            setActive(1);
            callApi(e.target.innerHTML);
            dispatch(hashtag(e.target.innerHTML));
            navigate("/");
          }}
        >
          <p className="header__link-title">#sitnikfriday</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(1) }}
          ></div>
        </div>
        <div
          className="header__link"
          onClick={(e) => {
            setActive(2);
            callApi(e.target.innerHTML);
            dispatch(hashtag(e.target.innerHTML));
            navigate("/");
          }}
        >
          <p className="header__link-title">#sexymonday</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(2) }}
          ></div>
        </div>
        <div
          className={"header__link"}
          onClick={(e) => {
            setActive(3);
            callApi(e.target.innerHTML);
            dispatch(hashtag(e.target.innerHTML));
            navigate("/");
          }}
        >
          <p className="header__link-title">#нюдсочетверг</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(3) }}
          ></div>
        </div>
        <div
          className="header__link"
          onClick={(e) => {
            setActive(4);
            callApi(e.target.innerHTML);
            dispatch(hashtag(e.target.innerHTML));
            navigate("/");
          }}
        >
          <p className="header__link-title">#нюдсыкаждыйдень</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(4) }}
          ></div>
        </div>
      </div>
    </div>
  );
}
