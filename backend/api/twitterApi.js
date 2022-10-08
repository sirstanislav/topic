const { BEARER_TOKEN } = process.env;
const { Client } = require("twitter-api-sdk");
const client = new Client(BEARER_TOKEN);

module.exports.twitterRequest = async (req, res, next) => {
  const { headerLink } = req.body;
  const response = await client.tweets
    .tweetsRecentSearch({
      query: `${headerLink} has:images`,
      max_results: 10,
      expansions: ["attachments.media_keys"],
      "media.fields": ["url"],
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => next(err));
};
