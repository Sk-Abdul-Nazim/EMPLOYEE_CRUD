import React from 'react';
import { toast } from 'react-toastify';
import {  Form, FormGroup, Card, CardTitle, Button, CardHeader, CardFooter, CardBody, CardText, Container } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {deleteEmployee} from '../actions/action.js'
import { useDispatch } from 'react-redux';

const Employee = ({employeeData, count}) =>{

  let history = useHistory();
  const dispatch  = useDispatch();

  const ConfirmAlert = (id) => {
    confirmAlert({
      title: 'Confirm to Delete?',
      message: 'Are you sure to delete this employee.',
      buttons: [
        {
          label: 'Delete it',
          onClick: () => deleteEmployeeData(id)
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
        }
      ]
    });
  }

  const deleteEmployeeData = (id) => {
   dispatch(deleteEmployee(id));
   toast.success("1 Employee Deleted",{
    position:'top-center'
});
  }

  const updateEmployeeData = (id) => {

    history.push({
      pathname: "/updateEmployee/" + id,
      search: "?abc",
    });
  }


  return(
    <tr>
    <td>{count}</td>

    <td>{employeeData.employeeName}</td>
    <td>{employeeData.employeeEmail}</td>
    <td>{employeeData.employeePhone}</td>
    <td>{employeeData.employeeDiscription}</td>
    <td>{employeeData.joiningDate}</td>
    <td>
      <Button color="warning ml-3"onClick={(e) => updateEmployeeData(employeeData._id)} >Update</Button>
      <Button color="danger ml-3" onClick={(e) => ConfirmAlert(employeeData._id)} >Delete</Button>
    </td>
  </tr>
  );
}

export default Employee;