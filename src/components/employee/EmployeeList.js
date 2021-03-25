import React, { Component }from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { connect } from 'react-redux';
//import Table from './Table'

class EmployeeList extends Component {
    render(){
        const {employees} = this.props;
        const renderEmployee = (employee, id) =>{
            return(
                <tr key={id}>
                    <td>{employee.id}</td>
                    <td>{employee.employeename}</td>
                    <td>{employee.role}</td>
                    <td>{employee.location}</td>
                    <td>{employee.active}</td>
                    <td className='text-right'>
                        <button className='btn' style={{width:'60px'}}>Edit</button>
                        <button onClick={()=>this.props.dispatch({type:'DELETE_EMPLOYEE',employeeid:this.props.employee.id})} className='btn red light-3' style={{width:'78px'}}>Delete</button>
                    </td>
                </tr>
            )
        }

        return(
                <div className='container section'>
                    <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Role</th>
                            <th>Location</th>
                            <th>Active</th>
                            <th className='text-right'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map(renderEmployee)}
                    </tbody>
                    </ReactBootStrap.Table>
                </div>
        )
    }
}
    


export default connect()(EmployeeList)
