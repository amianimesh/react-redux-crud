

const initState = {
    employees: [
        {id :'1', employeename:'Karan', role: 'Developer', location: 'Kolkata', active: 'ON'},
        {id :'2', employeename:'Karan', role: 'Developer', location: 'Kolkata', active: 'ON'},
        {id :'3', employeename:'Karan', role: 'Developer', location: 'Kolkata', active: 'ON'}
    ]
};

const employeeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE' :
            return {    
                ...state,    
                employees: state.employees.concat(action.data)  
            };
            case 'DELETE_EMPLOYEE' :
                return {    
                    ...state,    
                    employees: state.employees.filter(item => item.id !== action.id)    
                };
                
                case 'EDIT_EMPLOYEE':    
                /*return {    
                    ...state,    
                    employees: state.employees.map(    
                        (content ) => content.id === action.payload.id ? {...content, employeename : action.payload.employeename ,  role : action.payload.role, location : action.payload.location, active : action.payload.active }    
                                                : content)    
                };*/    
        default:
            return state;
    }
}


export default employeeReducer