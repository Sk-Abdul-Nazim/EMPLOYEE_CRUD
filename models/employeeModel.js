import mongoose from 'mongoose';
import moment from 'moment';

const schema = mongoose.Schema({
    employeeName:{
        type:String,
        required:true
    },
    employeeEmail:{
        type:String,
        required:true
    },
    employeePhone:{
        type:String,
        required:true
    },
    employeeDiscription:{
        type:String,
        required:true
    },
    joiningDate:{
        type:String,
    },
    isActive:{
        type:Boolean,
        default:false,
    }
});

const employeeModel = mongoose.model('employeeModel', schema);

export default employeeModel;