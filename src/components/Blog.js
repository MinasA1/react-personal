import React from 'react'
import { Timeline } from 'react-twitter-widgets'


const Blog = () => (
  <div className='page'>
    <h2>Blog</h2>
   <div className='blog'>
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'minas_anton'
      }}
      options={{
        username: 'minas_anton',
        height: '800'
      }}
    />
    </div>
    <div>
      
    </div>
  </div>
)

export default Blog

