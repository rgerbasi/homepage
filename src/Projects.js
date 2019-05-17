import React, { Component } from 'react'
import { Table } from 'reactstrap'
//import { Route } from 'react-router-dom'

class Projects extends Component {

    render() {
        return(
            <div className="Projects">
                <h1>projects body</h1>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title1</td>
                            <td>Descropt</td>
                            <td>Language</td>
                        </tr>
                    </tbody>
                </Table>


            </div>
        )
    }
}

export default Projects