import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';


export default (
    <Switch>
        <Route exact path ='/' component={Landing}/>
        <Route path = '/projects' component={Projects}/>
        <Route path = '/About' component={About}/>
    </Switch>
)