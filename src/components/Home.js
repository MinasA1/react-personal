import React from 'react'
import { summary, data, skills } from '../data/aboutme'




const Home = (props) => (
    <div className='page'>
        <h1>Welcome To My Page!</h1>
        <br />
        <div className='text-container'> 
        <h2>About me:</h2>
            {summary} 
        <br />
        <h3>Timeline</h3>
        
        </div>
        <br />
        <br />
        <div className='timeline'>
            {
                data.map((v, index) => (
                    <Block
                        title={v.title}
                        text={v.text}
                        y={v.year}
                        class={index % 2 === 0 ? 'container left' : 'container right'}
                        image={v.image}
                        key={index} />
                ))}

        </div>
        <div className='skills-container'>
            <h3> Skills & Tools </h3>

            <br />
            { 
                skills.map((v, index) => (
                <img src={window.location.origin + v} alt='skill' key={index} />
                ))
            }
        </div>
    </div>
)


const Block = (props) => (
    <div className={props.class}>
        <div className='content'>
            {props.image ?
                <img src={window.location.origin + props.image} alt={props.title} />
                : <br />
            }
            <h2>{props.title} - {props.y}</h2>
            <p>{props.text}</p>
        </div>
    </div>
)
export default Home