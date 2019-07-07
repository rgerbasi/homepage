import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

class About extends Component{

    render(){
        return(
            <div className="About">
                <br/>
                <Container>
                <Row>
                    <Col>Individual studying Computer Science with a concentration in Computer Graphics who is also a cheerleader at Purdue University.</Col>
                </Row>
                </Container>
                <br/>

                <Container>
                    <Row>
                        <Col><h1>
                            Computer Science courses taken
                        </h1></Col>

                    </Row>
                    <div className="classes-taken">
                    
                        <Row>
                            <Col>CS 180: Problem Solving and Object-Oriented Programming (Java)</Col>
                        </Row>
                        <Row>
                            <Col>CS 182: Foundations of Computer Science (Discrete Math)</Col>
                        </Row>
                        <Row>
                            <Col>CS 240: Programming in C</Col>
                        </Row>
                        <Row>
                            <Col>CS 250: Computer Architecture</Col>
                        </Row>
                        
                    </div>
                </Container>

                <Container>
                    <Row>
                        <Col></Col><h1>
                            Classes in progress
                        </h1>
                    </Row>
                    <div className="classes-inprogress">
                        <Row>
                            <Col></Col>Stat 350: Intro to Statistics
                        </Row>
                        <Row>
                            <Col></Col>CS 251: Data Structures And Algorithms
                        </Row>
                        <Row>
                            <Col></Col>MA 265: Linear Algebra
                        </Row>
                        <Row>
                            <Col></Col> PSY 120: Elementary Psychology
                        </Row>
                        <Row>
                            <Col></Col>COM 217: Science Writing and Presentation
                        </Row>
                    
                    </div>
                </Container>

                <Container>
                    
                </Container>
            </div>
        )
    }

}

export default About