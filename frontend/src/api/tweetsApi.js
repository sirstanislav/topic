class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getTweets(headerLink, banList) {
    return fetch(`${this._baseUrl}/`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        headerLink,
        // nextToken,
        banList
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const TweetsApi = new Api({
  baseUrl: "https://topicc-api.herokuapp.com",
  // baseUrl: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json",
  },
});
