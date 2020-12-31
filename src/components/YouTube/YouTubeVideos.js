import React from 'react'

export default function YouTubeVideos({video, onVideoSelect}) {
  return (
    <div className="youtube-video" onClick={() => onVideoSelect(video)}>
      <img className="youtube-img" alt={video.snippet.title} src={video.snippet.thumbnails.high.url}></img>
    </div>
  )
}
