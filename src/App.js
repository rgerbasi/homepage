import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Container,
  Row,
  Col
} from 'reactstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faInstagram,
  faGithub,
  faLinkedin,
  faFacebook,
  faSnapchat,
  faGit

} from '@fortawesome/free-brands-svg-icons'

import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
//import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      curpath: '/',
      dropdownOpen: false,
    }
  }
  
  toggleTop(e){
    console.log('SHIIIIIIT')
    this.setState(prevSt => ({
      topDropdownOpen: !prevSt.topDropdownOpen
    }))
  }
  topOnMouseEnter(){
    this.setState({topDropdownOpen:true})
    console.log('fuck')
  }
  topOnMouseLeave(){
    this.setState({topDropdownOpen:false})
    console.log('nooo')
  }
  botOnMouseEnter(){
    this.setState({botDropdownOpen:true})
    console.log('fuck part 2')
  }
  botOnMouseLeave(){
    this.setState({botDropdownOpen:false})
    console.log('nooo part 2')
  }

  


  render(){
    return(
      <div className="App" >
        <Navbar color="light" light expand>
          
              <Dropdown 
                isOpen={this.state.topDropdownOpen} 
                toggle={() => this.toggleTop()} 
               onMouseEnter={() => this.topOnMouseEnter()} onMouseLeave={()=>this.topOnMouseLeave()}>
              
              <DropdownToggle 
                 data-toggle="dropdown" tag="span" >
                <NavbarBrand >
                  Rodrigo Gerbasi
                </NavbarBrand>
               </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem href="">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon icon={faSnapchat} size="2x"/>
                  </DropdownItem>
                  

                </DropdownMenu>
              </Dropdown>

          <Nav className="ml-auto" navbar>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects" >Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/about">About</NavLink> 
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
        </Switch>

        <Navbar color="light" light expand fixed="bottom">
          
        <Dropdown 
                isOpen={this.state.botDropdownOpen} 
                toggle={() => this.toggleBot()} 
               onMouseEnter={() => this.botOnMouseEnter()} onMouseLeave={()=>this.botOnMouseLeave()}>
              
              <DropdownToggle 
                 data-toggle="dropdown" tag="span" >
                <NavbarBrand >
                  Links
                </NavbarBrand>
               </DropdownToggle>
             


                <DropdownMenu>

                  <DropdownItem href="www.google.com">
                    Snapchat
                    <img src="./icons/ghub.png" alt=""/>
                  </DropdownItem>
                  <DropdownItem>
                    Github
                  </DropdownItem>
                  <DropdownItem>

                  </DropdownItem>

                </DropdownMenu>
            </Dropdown>

          
          <Nav className="ml-auto" navbar>
            <NavLink href="/">Home</NavLink>
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