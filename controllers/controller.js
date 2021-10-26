
import mongoose from 'mongoose';
import employeeModel from '../models/employeeModel.js';
import moment from 'moment';

export const addEmployee = async (req, res) => {
  
const employeeName = req.body.employeeName;
const employeeEmail = req.body.employeeEmail;
const employeePhone = req.body.employeePhone;
const employeeDiscription = req.body.employeeDiscription;
const joiningDate = req.body.joiningDate;

    const newData = new employeeModel({
        employeeName: employeeName,
        employeeEmail: employeeEmail,
        employeePhone: employeePhone,
        employeeDiscription:employeeDiscription,
        joiningDate:moment(joiningDate).format('DD-MM-YYYY'),
        isActive:true,

    });

    try {
      await newData.save();
      console.log("1 Record Inserted");
      res.status(201).json(newData);
    } catch (error) {
      console.log(error.message);
    }
}

export const employeeData = async(req, res) =>{
  try {
     const employeeData = await employeeModel.find({isActive:true});
     res.status(201).json(employeeData);
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteEmployee = async(req, res) =>{
  try {
    const {id:_id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
      res.status(404).send("No fount data with this id");
    }

    const updateData = {
      isActive:false
    }
     
    const updateDataWithIsActive = await employeeModel.findByIdAndUpdate(_id, updateData, {new:true});
    console.log("1 Employee Deleted");
    res.json(updateDataWithIsActive);
  } catch (error) {
    console.log(error.message);
  }
}

export const updateEmployee = async(req, res)=>{
  try {
    const {id:_id} = req.params;
    const employeeName = req.body.employeeName;
    const employeeEmail = req.body.employeeEmail;
    const employeePhone = req.body.employeePhone;
    const employeeDiscription = req.body.employeeDiscription;
    const joiningDate = req.body.joiningDate;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send("No fount data with this id");
    }
    const updateData = {
      employeeName: employeeName,
      employeeEmail: employeeEmail,
      employeePhone: employeePhone,
      employeeDiscription:employeeDiscription,
      joiningDate:moment(joiningDate).format('DD-MM-YYYY'),
      isActive:true,

    }
 
    const updateDataWithId = await employeeModel.findByIdAndUpdate(_id, updateData,{new:true});
    console.log("i Employee Updated");
    res.json(updateDataWithId);

  } catch (error) {
    console.log(error.message);
  }
}