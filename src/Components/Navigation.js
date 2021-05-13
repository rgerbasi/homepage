import React, { Component } from 'react';


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  
  faInstagram,
  faGithub,
  faLinkedin,
  faFacebook,
  faSnapchat,

} from '@fortawesome/free-brands-svg-icons'

export default class Navigation extends Component{
    constructor(props){
        super(props)
        this.state ={
          
          topDropdownOpen: false,
          botDropdownOpen:false,
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
          <div className="Nav" >
            <Navbar color="light" light expand>
              
                  <Dropdown 
                    isOpen={this.state.topDropdownOpen} 
                    toggle={() => this.toggleTop()} 
                   onMouseEnter={() => this.topOnMouseEnter()} onMouseLeave={()=>this.topOnMouseLeave()}>
                  
                  <Dropdown.Toggle 
                     data-toggle="dropdown" tag="span" >
                    <Navbar.Brand >
                      Rodrigo Gerbasi
                    </Navbar.Brand>
                   </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                    <Dropdown.Item style={{float:'left',}} href="https://github.com/rgerbasi">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'4%'}}>Github</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.linkedin.com/in/rgerbasi/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'5%'}}>LinkedIn</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.facebook.com/raxos123"> 
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'4.5%'}}>Facebook</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.instagram.com/rgerbasi98/">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'5%'}}>Instagram</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.snapchat.com/add/raon31/">
                        <FontAwesomeIcon icon={faSnapchat} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'4%'}}>Snapchat</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
    
              <Nav className="ml-auto" navbar>
                <Nav.Link href="/homepage">Home</Nav.Link>
                <Nav.Link href="/homepage/projects" >Projects</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link> 
              </Nav>
            </Navbar>
    
            <Navbar color="light" light expand fixed="bottom">
              
            <Dropdown 
                    isOpen={this.state.botDropdownOpen} 
                    toggle={() => this.toggleBot()} 
                   onMouseEnter={() => this.botOnMouseEnter()} onMouseLeave={()=>this.botOnMouseLeave()}>
                  
                  <Dropdown.Toggle 
                     data-toggle="dropdown" tag="span" >
                    <Navbar.Brand >
                      Links
                    </Navbar.Brand>
                   </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item style={{float:'left',}} href="https://github.com/rgerbasi">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'4%'}}>Github</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.linkedin.com/in/rgerbasi/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'5%'}}>LinkedIn</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.facebook.com/raxos123"> 
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'4.5%'}}>Facebook</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.instagram.com/rgerbasi98/">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'5%'}}>Instagram</p>
                      </Dropdown.Item>
                      <Dropdown.Item style={{float:'left',}} href="https://www.snapchat.com/add/raon31/">
                        <FontAwesomeIcon icon={faSnapchat} size="2x"/>
                        <p style={{float:'right',padding:'5%', paddingLeft:'4%'}}>Snapchat</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
              </Dropdown>
    
              
              <Nav className="ml-auto" navbar>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects" >Projects</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link> 
              </Nav>
            
             
            </Navbar>
    
    
          </div>
        )
    }


  }