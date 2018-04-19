import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Nav.js'
import Page from '../components/Page.js'
import Footer from '../components/Footer'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className='title'>Minas Anton</h1>
          <NavBar />
        </header>
        <Page />

      </div>
    );
  }
}

const App = () => (
  <Router>
    <div>
      <Main />
      <Footer />

    </div>
  </Router>
)

export default App;

/* constructor() {
  super()
  this.urls = [
    'www.holbertonschool.com',
    'www.teiwest.gr'
  ]
}
componentDidMount() {
  let r = []
  this.urls.forEach(e => {
    fetch('http://api.linkpreview.net/?key=5ace96d72fc20b05d931354c9f442ace4af9fe8c9a754&q=' + e)
      .then(res => {
        return res.json()
      }).then(res => {
        r.push(res)
        this.setState({ data: r })
        console.log(r)
      }).catch(er => {
        console.log(er)
      })
  });
}
 */