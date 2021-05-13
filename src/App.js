import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from './Components/Home'
import Projects from './Components/Projects'
//import Contact from './Contact'
import About from './Components/About'
import Navigation from './Components/Navigation'
//import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
     
    }

  }


  render(){
    return(
      <div className="App" >
      <Router>
          <Navigation/>
          <Switch>
          
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/" exact component={Home}/>
          </Switch>
      </Router>

      </div>
    )
  }
}

export default App;

/*

     <NavLink href="/contact">Contact</NavLink>

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