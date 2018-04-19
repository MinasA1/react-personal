import React from 'react'
import Card from './Card'

let projects = [
    { title: 'ChartBang', text: 'Data visualization web application', desc: 'ChartBang makes it easy for users to visualize their data with the help of a 3 step wizard. The wizard connects to your database, populates tables and fields and you get to define the dataset and the chart you want to use. It is developed with React/Redux, Semantic UI, ChartsJs, Express, Sequelize and MongoDB!' },
    { title: 'Yish', text: 'A foodstagram', desc: 'Yish is basically an instagram for foodies, people get to upload photos of their favorite dishes and most importantly rate them. The collected data helps us to create a curated menu of the best dish in town' },
    { title: 'AirBnB-Clone', text: 'A single page clone of AirBnB', desc: 'This is a clone of the famous Airbnb, it was developed as part of the Holberton School curriculum in order to learn and apply  Python, Flask Web Framework, Jinja2 templating, Object Oriented Programming, Object Relational Mapping, Jquery, Web Infrastructure design, RestFull-API and basically everything sourounding the developement of a Web Application' },
    { title: 'Simple Shell', text: 'Custom command line interpreter', desc: 'A simple implementation of the linux shell developed in C. This project was focused into understanding the very low level consepts of programming, how Linux work, the heap and the stack, etc.'},
]

const Projects = () => (
    <div className='page-flex'>
        <h2>My projects</h2>
        <div className='flex-container'>
            {projects.map((v, index) =>
                <Card
                    title={v.title}
                    text={v.text}
                    desc={v.desc}
                    key={index} />
            )}
        </div>

    </div>
)


export default Projects