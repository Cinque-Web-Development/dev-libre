import React from 'react'

export default function YouTubeVideos({video}) {
  return (
    <div>
      <img alt={video.snippet.title} src={video.snippet.thumbnails.high.url}></img>
    </div>
  )
}
