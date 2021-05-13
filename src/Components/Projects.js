/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
//import { Route, Switch } from 'react-router-dom'

// import { 
//     Table,
//     Container,
    
//     Modal,
//     ModalHeader,
//     ModalBody,
    

// } from 'reactstrap'

//import YoutubePlayer from 'react-player'


class Projects extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            modalOpen: false,
            selected: "",
        }

    
    }
    click (e) {
        console.log("e is: ",e)
        console.log("e.target.className is: ", e.target.className)
        let classname = e.target.className
        if( classname ){
            //classname cannot be null or undef
            this.setState({
                modalOpen: true,
                selected: classname,
            })
        }
    }
    toggle () {
        this.setState(prevSt => ({
            modalOpen: !prevSt.modalOpen,
        }))
    }
    select (name) {
        if (name === this.state.selected){
            return true
        }
        return false
    }

    render() {
        return(
            <div className="Projects">
            <Container>

            <Table hover bordered>
            <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Language</th>
            </tr>
            </thead>

            <tbody>
                
            <tr onClick={(e)=> this.click(e)}>
                <td className="ircserver">IRC Server</td>
                <td>The last project of CS240 in which we got some helper code for setting up the sockets but used telnet while developing the functions</td>
                <td>C++</td>
            </tr>

            <tr onClick={(e)=> this.click(e)}>
                <td className="busterchat">Busterchat</td>
                <td>The last project of CS180 in which we used Android Studio and past project code to make a simple recreation of Snapchat</td>
                <td>Java</td>
            </tr>

            <tr onClick={(e)=> this.click(e)}>
                <td className="myroom">Small Environment Model</td>
                <td>CGT241 environment project in which I decided to model my living room</td>
                <td>Maya</td>
            </tr>

            </tbody>
            </Table>
            
            </Container>
{/* 
            // modals

            //needed to bind this to each modal so ()=> this.toggle
            //server */}


            <Modal isOpen={this.state.modalOpen && this.select("ircserver")} toggle={()=> this.toggle()}  className="ircserver" size="lg" scrollable>
                <Modal.Header toggle={()=>this.toggle()} >IRC Server and GUI</Modal.Header>
                <Modal.Body>
                    <br/>
                    <Container>
                        {/* <YoutubePlayer
                            url="https://www.youtube.com/embed/pJL4blsaWbU"
                            playing={false}
                            controls
                            origin="http://localhost:3000"
                           
                        /> */}
                    </Container>
                    <Container>This project was set in 2 stages. The first one being a chat server in which we used telnet to send commands to the port opened for the server to parse commands that the server was supposed to implement. The second stage was making a GUI using QT Creator which we were the first class to have ever used it.
                    <h1>First stage</h1>
                    <p>
                    We were told to work in C++ and use classes and we were given a IRCServer class file, I decided to break down the other components of the project into classes so I would end up with User, Room, and Message objects. The server has a map of Users and Rooms, each User has a current room they are in, and each room has a map of messages and users.
                    </p>
                    
                    <p>
                    The main file is IRCServer.cpp, we were provided with the open_server_socket,runServer methods and part of the processRequest method. I edited the file to parse the sent in string with a stringstream and then multiple if-else statements to deal with each command.
                    The server initializes by opening a file called password.txt which is a makeshift database of users and passwords it creates the default main room called lobby and then creates user objects that were in the file and adds them all to the lobby. The server keeps track of users by having a map of user objects with their names as keys and another map of room objects with the roomnames as keys.
                    The server response if the command went successfully is "OK\r\n".
                    </p>
                    <p>
                    The server's methods are:
                    addUser, will write user into the file and then it is called when creating a new user.
                    createRoom, will create a room with the name passsed in the arguments and then add it to the map of rooms.
                    enterRoom, will check if the room exists in the list of rooms and then add the user to that room.
                    leaveRoom, removes user from room's map of users.
                    sendMessage, sends message in current room.
                    getMessages, is called when room is updated
                    getUsersinRoom, getAllUsers, getAllRooms, are the last methods of the server.
                    </p></Container>
                </Modal.Body>
                
            </Modal>
            //busterchat
            <Modal isOpen={this.state.modalOpen && this.select("busterchat")} toggle={()=> this.toggle()}  className="busterchat">
                <Modal.Header toggle={()=>this.toggle()}>Busterchat</Modal.Header>
                <Modal.Body>
                        <br/>

                        <p>
                            Throughout CS180, some of our earlier projects involved editing images using a helper class of Pixel, this project uses those files in Android Studio to achieve an app that is similar to snapchat. We had to ask for permission once to use the camera and then added some possible filters.
                        </p>
                </Modal.Body>
            </Modal>
            //myroom
            <Modal isOpen={this.state.modalOpen && this.select("myroom")} toggle={()=> this.toggle()}  className="myroom" size="lg">
                <Modal.Header toggle={()=>this.toggle()}>Room model</Modal.Header>
                <Modal.Body>
                    <br/>
                    <Container>
                    {/* <YoutubePlayer
                    url="https://www.youtube.com/embed/qT6FQXKmOrg"
                    /> */}

                    </Container>
                    <Container>
                    <p>
                    This was the first environment model assigned in my first modeling class. I chose to model my room, but I struggled with the polygons on the guitar model for a while.
                    </p></Container>
                        
                </Modal.Body>
            </Modal>
            

            </div>
        )
    }
}

//youtube's embed  <iframe title="irc" width="560" height="315" src="https://www.youtube.com/embed/pJL4blsaWbU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
// room <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

export default Projects