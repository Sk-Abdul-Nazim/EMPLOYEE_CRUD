
import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import {addEmployee} from '../actions/action.js'
import validator from 'validator';
const AddEmployee = () =>{

    const [errorMessage, setErrorMessage] = useState('')
    
  const validateDate = (value) => {
    
    if (validator.isBefore(value)) {
        setErrorMessage('');
    } else {
      setErrorMessage('Enter Valid Date!');
    }
  }
  
    useEffect(() =>{
        document.title = "Employee";
      },[]);
      
    const dispatch = useDispatch();
    const[employee,setEmployee] = useState({
        employeeName:"",
        employeeEmail:"",
        employeePhone:"",
        employeeDiscription:"",
        joiningDate:""
    });

    const{
        employeeName,
        employeeEmail,
        employeePhone,
        employeeDiscription,
        joiningDate
    }=employee;

    const onChange = (e) =>{
        setEmployee({...employee,[e.target.name]:e.target.value});
    }
    const onSubmitHandle = (e) =>{
        e.preventDefault();
        dispatch(addEmployee(employee));
        toast.success("1 Employee Added",{
            position:'top-center'
        });
      clear();
    }

    const clear = () =>{
        setEmployee({
        employeeName:"",
        employeeEmail:"",
        employeePhone:"",
        employeeDiscription:"",
        joiningDate:""
        });
      }

    return(
      <div>
     
            <Form onSubmit={onSubmitHandle}>
                <h1>Fill Employee Details</h1>
                <br/>
              
                <FormGroup>
                    <label for="employeeName">Employee Name</label>
                    <br/>
                    <input type="text" 
                    name="employeeName" 
                    id="employeeName" 
                    placeholder="Enter Employee Name"
                    value={employeeName}
                    onfocus="this.placeholder = ''"
                    autocomplete="off"
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <label for="employeeEmail">Employee EmailID</label>
                    <br/>
                    <input type="email" 
                    name="employeeEmail" 
                    id="employeeEmail" 
                    placeholder="Enter Employee Email"
                    value={employeeEmail}
                    autocomplete="off"
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <label for="employeePhone">Employee Phone No</label>
                    <br/>
                    <input type="text" 
                    name="employeePhone" 
                    id="employeePhone" 
                    placeholder="Enter Employee Phone No"
                    value={employeePhone}
                    autocomplete="off"
                    min="10"
                    max="10"
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <label for="employeeDis">Employee Discription</label>
                    <br/>
                    <input type="textarea" 
                    name="employeeDiscription" 
                    id="employeeDiscription" 
                    placeholder="Enter Employee Discription"
                    value={employeeDiscription}
                    autocomplete="off"
                    style={{height:100}}
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <label for="date">Joining Date</label>
                    <br/>
                    
                    <input type="date" 
                    name="joiningDate" 
                    id="joiningDate" 
                    placeholder="Enter Employee Joining Date"
                    value={joiningDate}
                    autocomplete="off"
                    onChange={(e)=>{
                        onChange(e);
                        validateDate(e.target.value)
                    }}
                    required
                    />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                     }}>{errorMessage}</span>
                </FormGroup>
                <br/>
                <Container classname="text-center">
                    <Button type="submit" color="success">Add Employee</Button>&ensp;
                    <Button type="reset" onClick={(e) => clear()}color="warning ml-2">Clear</Button>
                </Container>
            </Form>
    
     </div>
    );
}

export default AddEmployee;