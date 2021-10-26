import axios from "axios";

export const addEmployee = (employeeData) => axios.post('/employee/addEmployee', employeeData);
export const viewEmployee = () => axios.get(`/employee`);
export const deleteEmployee = (id) => axios.patch(`/employee/deleteEmployee/${id}`,id);
export const updateEmployee = (id, employeeData) => axios.patch(`/employee/updateEmployee/${id}`,employeeData);

