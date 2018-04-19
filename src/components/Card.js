import React from 'react'

const Card = (props) => (
    <div className='card'>

        <div className='card-title'>
            <h3><b>{props.title}</b></h3> 
            <p>{props.text}</p> 
        </div>
        <div className='card-content'>
            {props.desc}
        </div>
    </div>
)

export default Card