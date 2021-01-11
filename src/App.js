import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import YouTube from './components/YouTube/YouTube';
import MainVideo from './components/MainVideo/MainVideo';
import Twitter from './components/Twitter/Twitter'
import Reddit from './components/Reddit/Reddit';



export default function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState(null)
  const [youtuber, setYoutuber] = useState('deved');
  const [programmingLanguage, setProgrammingLanguage] = useState('')
  const [id, setId] = useState('')

  

  
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
    setId('1344767664326139905')
    })
  } 


  useEffect(() => {
        fetchVideos()
        fetchLanguageVideos()
    }, [youtuber])

   
   
  const fetchLanguageVideos = (language) => {
    setProgrammingLanguage(language)
    axios
    .get("/languages", {
      params: {
        youtuber: youtuber,
        language: language
      },
    })
  .then(response => {
    setVideos(response.data.items)
    setSelectedVideos(response.data.items[0])
    setProgrammingLanguage(language)
    if(language === "react") {
      setId("1346900273642532867")
    } else if(language === "python") {
      setId("1348340577469952002")
    } else if(language === "node") {
      setId("1348341371023855616")
    } else if(language === "javascript") {
      setId("1348345226105147398")
    }
    })
  } 

 


  

  const onVideoSelect = (video) => {
      setSelectedVideos(video)
  }

    return (
        <Router>
            <NavBar fetchLanguageVideos={fetchLanguageVideos}/>
            <MainVideo setYoutuber={setYoutuber}  selectedVideos={selectedVideos}/>
            <YouTube videos={videos} onVideoSelect={onVideoSelect}/>
            <div className="twitter-reddit">
              <Twitter id={id}/>
              <Reddit programmingLanguage={programmingLanguage}/>
            </div>
        </Router>
    )
}
