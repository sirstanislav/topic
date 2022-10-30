const BEARER_TOKEN = process.env.BEARER_TOKEN;
const { Client } = require("twitter-api-sdk");
const client = new Client(BEARER_TOKEN);

module.exports.twitterRequest = async (req, res, next) => {
  const { headerLink, banList } = req.body;
  console.log(banList);
  const response = await client.tweets
    .tweetsRecentSearch({
      // next_token: nextToken,
      query: `${headerLink} has:images -is:retweet ${banList ? banList : ""}`,
      max_results: 100,
      sort_order: "relevancy",
      // sort_order: "recency",
      "tweet.fields": ["id", "attachments", "entities", "text"],
      expansions: [
        "attachments.media_keys",
        "attachments.poll_ids",
        "author_id",
      ],
      "user.fields": ["name", "pinned_tweet_id", "url", "username"],
      "media.fields": ["alt_text", "preview_image_url", "url", "variants"],
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => next(err));
};
