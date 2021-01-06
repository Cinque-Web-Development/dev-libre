import React from 'react'
import './Twitter.css';
import { Timeline } from 'react-twitter-widgets'

export default function Twitter({id}) {
  return (
    <div className="twitter">
      <h2>Twitter Feed</h2>
      <Timeline
        dataSource={{
          sourceType: 'list',
          id: id
        }}
        options={{
          height: '1000px',
          width: '50vw'
        }}
      />
    </div>
  )
}
