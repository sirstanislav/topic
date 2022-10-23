// const { BEARER_TOKEN } = process.env;
const BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAOGLdQEAAAAAhdsw1PgBHjougLREVHV8vzZan24%3DyPC7cBFhXgJ8AayDu8ZWJhqRodle8IQdQWbuXE7u6xyLn5VQBJ";
const { Client } = require("twitter-api-sdk");
const client = new Client(BEARER_TOKEN);
const banList = `-from:tooburninx -from:ThomasA70462161 -from:mafusha -from:451Denis
-from:veuxalleraparis -from:phan_dyck -from:Alex__19sm`;

module.exports.twitterRequest = async (req, res, next) => {
  const { headerLink } = req.body;
  const response = await client.tweets
    .tweetsRecentSearch({
      query: `${headerLink} has:images -is:retweet ${banList}`,
      max_results: 50,
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
