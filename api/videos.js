import axios from 'axios';
const key = process.env.GOOGLE_KEY;


function getVideos(req, res) {
axios.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&type=video&maxResults=5&q=${req.query.youtuber}&key=${key}`)
.then((response) => {
  res.send(response.data);
})
.catch((err) => console.log(err))
}

export default getVideos