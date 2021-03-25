import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddNewEmployee extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const employeename = this.getEmployeename.value;
    const role =  this.getRole.value;
    const location = this.getLocation.value;
    const active = this.getActive.value;
    const data = {
      id: Math.random(),
      employeename,
      role,
      location,
      active
    }

    console.log(data)
    this.props.dispatch({
      type:'ADD_EMPLOYEE',
      data});
    this.getEmployeename.value = '';
    this.getRole.value = '';
    this.getLocation.value = '';
    this.getActive.value = '';

  }
render() {
    return (
      <div className='row'>
        <div className='col s12 l2 right'>
        <div className='card' style={{width: "300px"}}>
                <div className='card-content'>
                  <span className='card-title'>Add New Employee</span>
                  <form onSubmit={this.handleSubmit}>
                    <input required type="text" style={{width: "200px"}} ref={(input)=>this.getEmployeename = input} 
                      placeholder="Enter Employee Name"/>
                    <input required type='text' style={{width: "200px"}} ref={(input)=>this.getRole = input}
                     placeholder="Enter Role" />
                     <input required type='text' style={{width: "200px"}} ref={(input)=>this.getLocation = input}
                     placeholder="Enter Location" />
                     <input required type='text' style={{width: "200px"}} ref={(input)=>this.getActive = input}
                     placeholder="Enter Active" />
                    <button className='btn blue'>Add</button>
                  </form>
                </div>
            </div>
        </div>
      </div>
           
        );
    }
}


export default connect()(AddNewEmployee);