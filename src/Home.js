import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

class Home extends Component {

    render() {
        
        return(
            <div className="home" >
                
                <Container>
                <p>
                    Individual studying Computer Science with a concentration in Computer Graphics who is also a cheerleader at Purdue University.
                </p>
                </Container>
               
                <Container>
                    
                    <div className="classes-taken">Computer Science courses taken at Purdue
                    <ul>
                        <li>
                            CS 180: Problem Solving and Object-Oriented Programming (Java)
                        </li>
                        <li>
                            CS 182: Foundations of Computer Science (Discrete Math)
                        </li>
                        <li>
                            CS 240: Programming in C
                        </li>
                        <li>
                            CS 250: Computer Architecture
                        </li>
                        </ul>
                    </div>
                </Container>
               
                <Container>
                    <div className="classes-inprogress">Classes in progress
                    <ul>
                        <li>
                            Stat 350: Intro to Statistics
                        </li>
                        <li>
                            CS 251: Data Structures And Algorithms
                        </li>
                        <li>
                            MA 265: Linear Algebra
                        </li>
                        <li>
                            PSY 120: Elementary Psychology
                        </li>
                        <li>
                            COM 217: Science Writing and Presentation
                        </li>
                    </ul>
                    </div>
                </Container>
               

                <div className="cheer">
                    Cheerstuff
                </div>
                

            </div>
        )
    }
}


export default Home