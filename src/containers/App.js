import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
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
