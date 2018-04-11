import React from 'react'

const Card = (props) => (
    <div className='card'>

        <div className='card-title'>
            <h4><b>{props.title}</b></h4> 
            <p>{props.text}</p> 
        </div>
        <div className='card-content'>
    
        </div>
    </div>
)

export default Card