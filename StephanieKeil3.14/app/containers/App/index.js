/*
 *
 * App
 *
 */

import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import NotFound from 'containers/NotFound';
import Travel from 'containers/Travel';
import Experience from 'containers/Experience';
import Connect from 'containers/Connect';



import './style.css';
import './styleM.css';



export default class App extends React.Component {

  
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route path='/Travel' render={() => <Travel/>}/>
        <Route path='/Experience' render={() => <Experience/>}/>
        <Route path='/Connect' render={() => <Connect/>}/>
        


        <Route path='*' render={() => <NotFound/>}/>
      </Switch>
    );
  }

}

