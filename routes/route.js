import express from 'express';
import {addEmployee, employeeData, deleteEmployee, updateEmployee } from '../controllers/controller.js';

const router = express.Router();

router.get('/',employeeData);
router.post('/addEmployee',addEmployee);
router.patch('/deleteEmployee/:id', deleteEmployee);
router.patch('/updateEmployee/:id',updateEmployee);

export default router;