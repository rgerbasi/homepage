import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'
import About from './About'

import './App.css'


class App extends React.Component{

  render(){
    return(
      <div className="App">
        <ul className="Links">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>W
        </Switch>
      </div>
    )
  }

}


export default App;
