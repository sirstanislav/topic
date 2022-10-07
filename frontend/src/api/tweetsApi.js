class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getTweets() {
    return fetch(`${this._baseUrl}/`, {
      headers: {
        ...this._headers,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const TweetsApi = new Api({
  baseUrl: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json",
  },
});