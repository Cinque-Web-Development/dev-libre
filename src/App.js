import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import YouTube from './components/YouTube/YouTube';
import MainVideo from './components/MainVideo/MainVideo';
import Twitter from './components/Twitter/Twitter'


export default function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState(null)
  const [youtuber, setYoutuber] = useState('deved')

  

  console.log(youtuber)
  const fetchVideos = () => {
    axios
    .get("/videos", {
      params: {
        youtuber: youtuber,
      },
    })
  .then(response => {
    setVideos(response.data.items)
    setSelectedVideos(response.data.items[0])
    })
  } 
  useEffect(() => {
        fetchVideos()
    }, [youtuber])




  

  const onVideoSelect = (video) => {
      setSelectedVideos(video)
  }

    return (
        <Router>
            <NavBar />
            {/* <MainVideo setYoutuber={setYoutuber}  selectedVideos={selectedVideos}/> */}
            <YouTube videos={videos} onVideoSelect={onVideoSelect}/>
            <div>
              <Twitter />
            </div>
        </Router>
    )
}
