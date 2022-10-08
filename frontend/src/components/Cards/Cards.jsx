import React from "react";
import { useState } from "react";
import { TweetsApi } from "../../api/TweetsApi";
import { linkContext } from "../../utils/LinkContext";
import "./Cards.css";

export default function Cards() {
  const [tweets, setTweets] = useState([])
  const headerLink = React.useContext(linkContext)

  // TweetsApi.getTweets(headerLink)
  //   .then((res) => {
  //     setTweets(res);
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return <div>Cards</div>;
}
