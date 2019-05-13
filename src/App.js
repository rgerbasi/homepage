import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'


class App extends Component{
  state = {
    curpath: "/",
  }



  render(){
    return(
      <div className={css(styles.App)} >
        <ul className={css(styles.list)} >
          <li style={styles.listItem}>
            <NavLink to="/"  >Home</NavLink>
          </li>
          <li style={styles.listItem}>
            <NavLink to="/projects" >Projects</NavLink>
          </li>
          <li style={styles.listItem}>
            <NavLink to="/contact" >Contact</NavLink>
          </li>
        </ul>

        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>

        <ul className={css(styles.list)} >
          <li style={styles.listItem}>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li style={styles.listItem}>
              <NavLink to="/projects" >Projects</NavLink>
            </li>
            <li style={styles.listItem}>
              <NavLink to="/contact" >Contact</NavLink>
            </li>
        </ul>


      </div>
    )
  }
}

const styles = StyleSheet.create({
  App:{
    textAlign: 'center',

  },
  list:{
    listStyleType: 'none',
    margin: 0,
    backgroundColor:'#333'
  },
  listItem:{
    float: 'center',

  },
  link:{
    display:'block',
    color:'white',
    textAlign:'center',
    padding: '14px 16px',
    textDecoration: 'none',

  }
})

export default App;
