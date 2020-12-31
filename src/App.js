import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import YouTube from './components/YouTube/YouTube';


export default function App() {
  const [videos, setVideos] = useState([])
  // const [selectedVideos, setSelectedVideos] = useState(null)

  useEffect(() => {
    const fetchVideos = () => {
      // event.preventDefault()
      axios.get("/videos", {
        params: {
          youtuber: "deved"
        }
      })
      .then(response => {
        console.log(response.data.items)
        setVideos(response.data.items)
      })
    } 
    fetchVideos()
  }, [])
  

    return (
        <Router>
            <NavBar />
            <YouTube videos={videos}/>
        </Router>
    )
}
