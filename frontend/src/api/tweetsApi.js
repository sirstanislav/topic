class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getTweets(headerLink) {
    return fetch(`${this._baseUrl}/`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        headerLink,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const TweetsApi = new Api({
  baseUrl: "https://topicc-api.netlify.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
