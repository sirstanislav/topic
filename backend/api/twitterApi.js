const { BEARER_TOKEN } = process.env;
const { Client } = require("twitter-api-sdk");
const client = new Client(BEARER_TOKEN);

module.exports.twitterRequest = async (req, res, next) => {
  const { headerLink } = req.body;
  const response = await client.tweets
    .tweetsRecentSearch({
      query: `${headerLink} has:images -is:retweet`,
      max_results: 10,
      sort_order: "relevancy",
      "tweet.fields": ["attachments", "entities", "text"],
      expansions: ["attachments.media_keys"],
      "media.fields": ["alt_text", "preview_image_url", "url"],
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => next(err));
};
