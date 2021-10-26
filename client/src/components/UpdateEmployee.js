import React from 'react';
import { toast } from 'react-toastify';
import {  Form, FormGroup, Card, CardTitle, Button, CardHeader, CardFooter, CardBody, CardText, Container } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {updateEmployee, addEmployee} from '../actions/action.js'
const UpdateEmployee = ({id}) =>
{
    let history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector((state)=> id ? state.employeeReducer.find((emp) => emp._id === id):null);

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

    useEffect(() => {
        document.title = "Update Category";
        if(data){
            setEmployee(data);
        }
    }, [data]);

    const onChange = (e) =>{
        setEmployee({...employee,[e.target.name]:e.target.value});
    }
    const onSubmitHandle = (e) =>{
       e.preventDefault();
        if(id){
           dispatch(updateEmployee(id, employee));
        }else{
            dispatch(addEmployee(employee));
        }
        
        history.push("/viewEmployee");

        toast.success("1 Employee Updated",{
            position:'top-center'
        });
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
        <Fragment>
            <Form onSubmit={onSubmitHandle}>
                <h1>Fill Employee Details</h1>
                <br/>
               
                {/* <input name="id" id="id" value={employeeId} type="hidden"   onChange={(e)=>{
                        onChange(e);
                    }}/>
                     */}
              
               
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
                    }}
                    required
                    />
                </FormGroup>
                <br/>
                <Container classname="text-center">
                    <Button type="submit" color="success">Update Employee</Button>&ensp;
                    <Button type="reset" onClick={(e) => clear()} color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
     </div>
    );

}

export default UpdateEmployee;