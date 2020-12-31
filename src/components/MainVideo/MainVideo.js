import React from 'react';
import './MainVideo.css';

export default function MainVideo({selectedVideos, setYoutuber}) {
  


 
    if(!selectedVideos) {
        return <div>Loading ...</div>
    }

    const handleChange = (e) => {
        setYoutuber(e.target.value)      
    }



    const videoSrc = `https://www.youtube.com/embed/${selectedVideos.id.videoId}`
    return (
        <div className="main-video-section">
            <div className="dropdown-section">
            <select  
             onChange={handleChange}
            style={{display: "block"}}>
                <option value="deved">Dev Ed</option>
                <option value="webdevsimplified">Web Dev Simplified</option>
                <option value="amigoscode">Amigos Code</option>
                <option value="traversymedia">Traversy Media</option>
            </select>
            </div>
            <div className="video-section">
            <iframe className="video" title="video-player" src={videoSrc} ></iframe>
            <h3>{selectedVideos.snippet.title}</h3>
            </div>
        </div>
    )
}

