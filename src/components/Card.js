import React from 'react'

const Card = (props) => (
    <div className='card'>

        <div className='card-title'>
        <h3><b>{props.title}</b></h3>
            <h4><p>{props.text}</p></h4> 
        </div>
        <div className='card-content'>
            {props.desc}
            <br />
            {props.url && <br />}
            {props.url &&
            <a href={props.url}>Try it</a>}
            <br />
            <h4><a href={props.link}> Check it on Github</a></h4>
        </div>
    </div>
)

export default Card