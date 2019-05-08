import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

import './App.css'


class App extends React.Component{

  render(){
    return(
      <div className="App">
        <ul className="Links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    )
  }

}


export default App;
