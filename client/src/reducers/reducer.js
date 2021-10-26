
import { ADD_EMPLOYEE_DATA, VIEW_EMPLOYEE_DATA, UPDATE_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA } from "../constants.js";


export const employeeReducer = (employee = [], action) => {

    switch (action.type) {
        case ADD_EMPLOYEE_DATA:
            return [...employee, action.payload];

        case VIEW_EMPLOYEE_DATA:
            return action.payload;

        case UPDATE_EMPLOYEE_DATA:
            return employee.map((item) => item._id === action.payload ? action.payload : item);

        case DELETE_EMPLOYEE_DATA:
            return employee.filter((item) => item._id !== action.payload);
        default:
            return employee;
    }
}