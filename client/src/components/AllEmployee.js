import React, { useEffect, useState } from 'react';
import Employee from './Employee';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import {viewEmployee} from '../actions/action.js';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

const AllEmployee = () =>{

  const[employee,setEmployee] = useState([]);
  const dispatch = useDispatch();
  const employeeData = useSelector((state)=>state.employeeReducer);
    
  var count = 1;

  useEffect(() =>{
    document.title = "Employee App";
    dispatch(viewEmployee());
    toast.success("View All Employees",{
      position:'top-center'
  });

  },[dispatch]);

    // const updateCourseWhenDeleteCourseBecauseDeleteTheObjectFromAllCoursesFunction = (id) =>{
    //     setEmployee(employee.filter((e) => e.id !== id));
    // }

   return(

    <div className="text-center">
          <h1>All Employees</h1>
          <p>List Of All Employees</p>
          <table>
                                <tr>
                                    <th> # </th>
                                    <th> Employee Name </th>
                                    <th> Employee Email </th>
                                    <th> Employee Phone </th>
                                    <th> Employee Discription </th>
                                    <th> Joining Date </th>
                                    <th> Action </th>

                                </tr>
             {
                 employeeData.length > 0
                 ? employeeData.map((item) => <Employee key={item._id} employeeData={item} count={count++} />)
                 : "No Employee"
             }
             </table>

             <div class="center">
                                
                                <Link to="/addEmployee" action>
                                    <Button color="success" size="sm">
                                        <p style={{ color: `Black` }}>Add Employee</p>
                                    </Button>
                                </Link>
                            </div>
    </div>
   );
}



export default AllEmployee;