import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const articles = [
  {Title: 'The scene behind the browser', Link: 'https://medium.com/@minas_anton/the-scene-behind-the-browser-4cb4fa474096'},
  {Title: 'Dynamic Libraries', Link: 'https://medium.com/@minas_anton/dynamic-or-shared-libraries-2805cb4fb410'},
  {Title: 'Static Libraries', Link: 'https://medium.com/@minas_anton/c-static-libraries-95ffc4d8dca2'},
  {Title: 'Objects in Python', Link: 'https://medium.com/@minas_anton/objects-in-python-9dc5cc9dc6f0'},
  {Title: 'What happens when you type ls*.c', Link: 'https://medium.com/@minas_anton/what-happens-when-you-type-ls-c-ec2473b794d7'},
  {Title: 'Stages of compilation process', Link: 'https://medium.com/@minas_anton/stages-of-compilation-process-8ac4ead4a21'}
]

const Blog = () => (
  <div className='page'>
   <div className='blog'>
      <h2>Publications</h2>
      <ul>
        {articles.map((v, index) => (
          <li key={index}>
            <a href={v.Link}>{v.Title}</a>
          </li>
        ))}
      </ul>
      <br />
      <h2>Tweets</h2>
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

