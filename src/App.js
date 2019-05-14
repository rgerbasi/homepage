import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Container,
  Row,
  Col
} from 'reactstrap'

import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

//import './App.css'

class App extends Component{
  state = {
    curpath: "/",
  }

  render(){
    return(
      <div className="App" >
        <Navbar color="light" light expand>
          <NavbarBrand href="/">Rodrigo Gerbasi</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavLink href="/projects" >Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/about">About</NavLink> 
          </Nav>
        </Navbar>

        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>


        <Navbar color="light" light expand fixed="bottom">
          <NavbarBrand href="/">Links</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavLink href="/projects" >Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/about">About</NavLink> 
          </Nav>
        
         
        </Navbar>


      </div>
    )
  }
}

export default App;

/*
  render(){
    return(
      <div className={css(styles.App)} >
        <ul className={css(styles.list, styles.page)} >
          <li  className={css(styles.listItem)} >
            <NavLink to="/" className="link" >Home</NavLink>
          </li>
          <li  className={css(styles.listItem)} >
            <NavLink to="/projects" className="link">Projects</NavLink>
          </li>
          <li  className={css(styles.listItem)} >
            <NavLink to="/contact" className="link">Contact</NavLink>
          </li>
        </ul>

        
        <Switch className={css(styles.page)}>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>

        <ul className={css(styles.list, styles.page)} >
          <li  className={css(styles.listItem)} >
              <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li  className={css(styles.listItem)} >
              <NavLink to="/projects"className="link" >Projects</NavLink>
            </li>
            <li className={css(styles.listItem)} >
              <NavLink to="/contact" className="link">Contact</NavLink>
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
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'auto',
    //backgroundColor:'#333'
    
  },
  listItem:{
    //display: 'inline',
    //float: 'left',

  },
  link:{
    display:'block',
    color:'black',
    textAlign:'center',
    padding: '14px 16px',
    textDecoration: 'none',
    '@media (max-width: 300px)':{
      textAlign:'center',
      float:'none',
    },
  },
  page:{
    '@media (max-width: 300px)':{
      textAlign:'center',
      float:'none',
    },
    //display: '',
  },

})

export default App;
*/