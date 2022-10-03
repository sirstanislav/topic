require("dotenv").config();
const express = require("express");
const app = express();
const { BEARER_TOKEN, PORT } = process.env;
const { Client } = require("twitter-api-sdk");

app.listen(PORT, () => {
  async function main() {
    const client = new Client(process.env.BEARER_TOKEN);
  
    const response = await client.tweets.tweetsRecentSearch({
      "query": "#нюдсочетверг has:images",
      "max_results": 10,
      "expansions": [
          "attachments.media_keys"
      ],
      "media.fields": [
          "url"
      ]
    });
    
    console.log("response", JSON.stringify(response, null, 2));
  }
    
  main();
});
