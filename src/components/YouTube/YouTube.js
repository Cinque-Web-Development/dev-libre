import React from 'react'
import './YouTube.css';
import YouTubeVideos from './YouTubeVideos'

export default function YouTube({videos, onVideoSelect}) {
  const videoList = videos.map(video => {
    return (
      <YouTubeVideos video={video} onVideoSelect={onVideoSelect}/>
    )
  })
  return (
    <div className="video-list">
      {videoList}
    </div>
  )
}
