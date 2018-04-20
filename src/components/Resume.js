import React from 'react'

let mobile = false;
if (/Mobi/.test(navigator.userAgent)) {
    mobile = true;
}

const Resume = () => (
    <div className='frame-container'>
    {
    mobile ?
    <object
        aria-label='resume'
        width='100%'
        height="600"
        data="https://docs.google.com/gview?embedded=true&url=http://minasanton.com/pdf/resume.pdf"
    />

        :
    <object
        aria-label='resume'
        data={window.location.origin + '/pdf/resume.pdf'}
        height={window.screen.width < 1000 ? 600 : 1450}
        width='99%'
        />
    }
    
        
    </div>
)

export default Resume