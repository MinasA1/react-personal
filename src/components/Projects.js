import React from 'react'
import Card from './Card'

let projects = [
    {title: 'Card Title 1', text: 'some text'},
    {title: 'Card Title 2', text: 'some text'},
    {title: 'Card Title 3', text: 'some text'},
    {title: 'Card Title 4', text: 'some text'},
]

const Projects = () => (
       <div> 
           <h2>My projects</h2>
        <div className='flex-container'>
            {projects.map((v, index) =>
                <Card title={v.title} text={v.text} key={index}/>
                )}    
        </div>
    </div>
)


  export default Projects