import React from 'react'
import YouTubeVideos from './YouTubeVideos'

export default function YouTube({videos}) {
  const videoList = videos.map(video => {
    return (
      <YouTubeVideos video={video}/>
    )
  })
  return (
    <div>
      {videoList}
    </div>
  )
}
