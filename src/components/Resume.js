import React from 'react'

let mobile = false;
if (/Mobi/.test(navigator.userAgent)) {
    mobile = true;
}

const Resume = () => (
    <div className='frame-container'>
    {
    mobile ?
    <iframe src="https://drive.google.com/file/d/1eNPADZsI1amScWFahHGwGPqLzHOzboLg/preview" width="80%" height="480"></iframe>

        :
    <object
        aria-label='resume'
        data={window.location.origin + '/pdf/resume.pdf'}
        height={window.screen.width < 1000 ? 600 : 1450}
        width='80%'
        />
    }
    
        
    </div>
)

export default Resume