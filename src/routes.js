import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import Projects from './Components/Projects';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);
