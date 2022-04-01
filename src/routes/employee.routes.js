const express = require('express');
const router = new express.Router();
const { getEmployees, addEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller.js");

router.get('/employees', getEmployees);
router.post('/employees', addEmployee);
router.patch('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;