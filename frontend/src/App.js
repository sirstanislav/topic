import { Client } from "twitter-api-sdk";
import { BEARER_TOKEN } from "./const/const";
import logo from "./logo.svg";
import "./App.css";

function App() {
  async function main() {
    const client = new Client(BEARER_TOKEN);

    const response = await client.tweets.tweetsRecentSearch({
      query: "#нюдсочетверг has:images",
      max_results: 10,
      expansions: ["attachments.media_keys"],
      "media.fields": ["url"],
    });

    console.log("response", JSON.stringify(response, null, 2));
  }

  main();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
