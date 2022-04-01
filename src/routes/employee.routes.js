const express = require('express');
const router = new express.Router();
const { getEmployees, addEmployee } = require("../controllers/employee.controller.js");

router.get('/employees', getEmployees);
router.post('/employees', addEmployee);

module.exports = router;