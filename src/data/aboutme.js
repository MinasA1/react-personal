import React from 'react'
const intro = <p>I am a Full Stack Software Engineer based in San Francisco!</p>

const summary = 
  <div>
    <p>A motivated Software Engineer with experience on building distributed information systems and microservices.
    I started writing code in high school where I gained a solid foundation on CS fundamentals and received a diploma on "Computer Systems, Applications and Network".
    Next I attended Technological Institute of Messolonghi that couple years later was named Technological Institute of Western Greece after merging with the Institute of Patra.
    My studies there were focused on Information Systems and their role in Business Administration, Accounting and Finance,   therefore was able to learn how to approach a real business problem and solve it with the help of Information Technology.</p>
    <p>After graduating with the degree of "Applied Informatics in Management and Economy" I joined the Greek Army, to fulfill my duties and I served as a Reservist Officer in the Greek Marines for 14 months.
      Right after I moved to the United States and continued my studies with Holberton School pursuing a certificate of "Full Stack Software Engineering".</p>
    <p>At Holberton School I was able to sharpen my skills on C and learn the best practices of Object-Oriented Programming using Python and NodeJS.
      On top of that, I was able to design and apply an entire Web Infrastructure, identify bottlenecks, potential performance issues but also how to deal with them and automate the solution using Puppet, Python or Bash scripts.</p>
    <p>Lately, working on a personal project with React for visualizing a MySQL or PostgreSQL database seamlessly and building a mobile app with React-Native for viewing and curating restaurant menus.</p>
  </div>
const data = [
  { title: 'Software Engineer Intern', text: 'Internship where I developed a data wearhouse', year: 2018, image: '/img/hazel.png' },
  { title: 'Holberton School', text: 'Project based, peer learning education for Full stack engineering', year: 2017, image: '/img/holberton.png' },
  { title: 'TEI of Western Greece', text: 'Applied Informatics in Managment and Economy', year: 2016, image: '/img/teiwest.png' },
  { title: 'Professional Highschool of Elliniko', text: 'Computer Systems, Applications and Network', year: 2011 }

]

const skills = [
  '/img/python.png',
  '/img/java.png',
  '/img/cplusplus.png',  
  '/img/javascript.jpeg',  
  '/img/react.png',
  '/img/redux.png',
  '/img/docker.jpg',
  '/img/github.png',
  '/img/heroku.png',
  '/img/postgres.png',
  '/img/mysql.png',
  
  

]
export { intro, summary, data, skills }