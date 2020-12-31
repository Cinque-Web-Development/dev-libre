import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default function Twitter() {
  return (
    <div>
      <h2>Twitter Feed</h2>
      <Timeline
        dataSource={{
          sourceType: 'list',
          id: '1344767664326139905'
        }}
        options={{
          height: '700',
          width: '40vw'
        }}
      />
    </div>
  )
}
