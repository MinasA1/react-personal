import React from 'react'

const Contact = () => (
    <div className='contact-form'>
        <h2>Contact Me</h2>
        <div className='form-section'> 
        <input type='text' className='input-text-25' placeholder='First Name' />
        <input type='text' className='input-text-25' placeholder='Last Name' />        
        </div>
        <input type='text' className='input-text' placeholder='Email' />
        <input type='text' className='input-text' placeholder='Subject' />        
        <textarea className='input-area' placeholder='Message...' />
        <button className='button'>Submit</button>
        
    </div>
)

export default Contact