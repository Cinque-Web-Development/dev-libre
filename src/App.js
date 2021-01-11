import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import YouTube from './components/YouTube/YouTube';
import MainVideo from './components/MainVideo/MainVideo';
import Twitter from './components/Twitter/Twitter'
import Reddit from './components/Reddit/Reddit';
import Footer from './components/Footer/Footer';



export default function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState(null)
  const [youtuber, setYoutuber] = useState('deved');
  const [programmingLanguage, setProgrammingLanguage] = useState('')
  const [id, setId] = useState('')

  

  
  const fetchVideos = () => {
    axios
    .get("/api/videos", {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[youtuber, programmingLanguage])

   
    const fetchLanguageVideos = () => {
    
      axios
      .get("/api/languages", {
        params: {
          youtuber: youtuber,
          language: programmingLanguage
        },
      })
    .then(response => {
      setVideos(response.data.items)
      setSelectedVideos(response.data.items[0])
      if(programmingLanguage === "react") {
        setId("1346900273642532867")
      } else if(programmingLanguage === "python") {
        setId("1348340577469952002")
      } else if(programmingLanguage === "node") {
        setId("1348341371023855616")
      } else if(programmingLanguage === "javascript") {
        setId("1348345226105147398")
      }
      })
    } 

 


  

  const onVideoSelect = (video) => {
      setSelectedVideos(video)
  }

    return (
        <Router>
            <NavBar setProgrammingLanguage={setProgrammingLanguage}/>
            <MainVideo setYoutuber={setYoutuber}  selectedVideos={selectedVideos}/>
            <YouTube videos={videos} onVideoSelect={onVideoSelect}/>
            <div className="twitter-reddit">
              <Twitter id={id}/>
              <Reddit programmingLanguage={programmingLanguage}/>
            </div>
            <Footer />
        </Router>
    )
}
