import React from 'react'

const social = [
    {title: 'Github', link: 'https://www.github.com/MinasA1'},
    {title: 'Linkedin', link: 'https://www.linkedin.com/in/minas-anton'},
    {title: 'Twitter', link: 'https://www.twitter.com/minas_anton'},
    {title: 'StackOverflow', link: 'https://stackoverflow.com/users/8507419/minasa1'},
    
    
]
const Footer = () => (
    <div className='footer'>
        <p> &copy;2018 Minas Anton </p>
        <ul>
            {
            social.map((v, index) => (
                <li key={index}>
                    <a href={v.link}>{v.title}</a>
                </li>
            ))}
        </ul>
    </div>
)

export default Footer