import * as api from "../api/api";
import { ADD_EMPLOYEE_DATA, VIEW_EMPLOYEE_DATA, UPDATE_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA } from "../constants.js";

export const addEmployee = (employeeData) => async(dispatch) =>{

    try {
        const {data} = await api.addEmployee(employeeData);
        dispatch({type:ADD_EMPLOYEE_DATA, payload:data });
    } catch (error) {
        console.log(error.message);
    }

}

export const viewEmployee = () => async(dispatch) =>{

    try {
        const {data} = await api.viewEmployee();
        dispatch({type:VIEW_EMPLOYEE_DATA, payload:data });
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteEmployee = (id) => async(dispatch) =>{

    try {
        const {data} = await api.deleteEmployee(id);
        dispatch({type:DELETE_EMPLOYEE_DATA, payload:id });
    } catch (error) {
        console.log(error.message);
    }

}


export const updateEmployee = (id, employeeData) => async(dispatch) =>{

    try {
        const {data} = await api.updateEmployee(id, employeeData);
        dispatch({type:UPDATE_EMPLOYEE_DATA, payload:data });
    } catch (error) {
        console.log(error.message);
    }

}