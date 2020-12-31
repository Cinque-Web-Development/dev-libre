require("dotenv").config()
const axios = require('axios');
const express = require('express');
const app = express();
const key = process.env.GOOGLE_KEY



app.get("/videos",(req , res) => {
  console.log(req.query.youtuber)
  axios.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&type=video&maxResults=5&q=${req.query.youtuber}&key=${key}`)
  .then((response) => {
    console.log(response.data)
    res.send(response.data)
  })
  .catch(err => console.log(err))
})

app.listen(3001, () => console.log('Dev app listening on port 3001!'));