import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Page = (props) => (
    <Switch>
        <Route exact path='/' component={Home} d={props.d} />
        <Route path='/blog' component={Blog} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />       
        <Route path='/contact' component={Contact} />       
    </Switch>
  );

export default Page