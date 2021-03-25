import React, { Component } from 'react';
import EmployeeList from '../employee/EmployeeList';
import { connect } from 'react-redux';
import AddNewEmployee from '../employee/AddNewEmployee';

class Dashboard extends Component {
    render(){
        console.log(this.props);
        const {employees} = this.props;
        return(
            <div>
                 <div className='row'>
                    <div className='col s12 l10'>
                        <EmployeeList employees={ employees } />
                    </div>
                    <div className='row'>
                        <div className='col s12 l2'>
                            <AddNewEmployee/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        employees: state.employee.employees
    }
}


export default connect(mapStateToProps)(Dashboard)