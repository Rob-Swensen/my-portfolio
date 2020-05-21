import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);
