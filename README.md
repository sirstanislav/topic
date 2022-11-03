# Topic

- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [Deploy](#deploy)
- [Online](#online)

## About

It's single page application in React that takes information through the Twitter API. In this case, it searches for tweets by keyword or hashtag, and if there is an image, it displays the image of that tweet.

![Preview](https://raw.githubusercontent.com/sirstanislav/topic/main/frontend/src/images/Screenshot%202022-11-03%20at%2002.23.53.png)

The project was created for a small community on Twitter that shared information using special hashtags. At the moment, four main hashtags have been replaced with stubs.

![Preview](https://raw.githubusercontent.com/sirstanislav/topic/main/frontend/src/images/Screenshot%202022-11-03%20at%2002.32.50.png)

Since all information obtained through the Twitter API is public, we can go to the user profile of the found image. Or block it.

## Technologies

Project is created with:

- React, React Router, React Hook Form
- Redux - to learn global state management
- Express.js like a proxy server. Because the Twitter API does not support CORS.

## Setup

Setup your port or URI in `cors.js` for backend and in `tweetsApi.js` for frontend.

Run `npm run start` for frontend and `npm run dev` for backend.

## Deploy

Frontend have been deployed via Netlify and backend on the Heroku.

You need to get your

```JS
BEARER_TOKEN
```

on the twitter api website and put in `.env` file. So that this string in backend `twitterApi.js` can work

```JS
const BEARER_TOKEN = process.env.BEARER_TOKEN
```

Then on the Heroku website you can manage your Config Vars.

## Online

[Topic](https://topicc.netlify.app/) - check here. Since on Heroku the container falls asleep every half hour. He needs 10-15 seconds to wake up and download the data.