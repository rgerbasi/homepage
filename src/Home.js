import React, { Component } from 'react'
//import { Route } from 'react-router-dom'

class Home extends Component {

    render() {
        
        return(
            <div className="home" style={styles.home}>
                <h1>Rodrigo Gerbasi</h1>
                <p>
                    Individual studying Computer Science with a concentration in Computer Graphics who is also a cheerleader at Purdue University.
                </p>

                <div className="classes-taken" style={styles.taken}>Computer Science courses taken at Purdue
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

                <div className="classes-inprogress" style={styles.willtake}> Classes in progress
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

                <div className="resume">
                    Resume
                </div>

                <div className="cheer">
                    Cheerstuff
                </div>
                

            </div>
        )
    }
}

const styles = {
    home:{

    },
    taken:{

    },
    willtake:{

    },
    
}

export default Home