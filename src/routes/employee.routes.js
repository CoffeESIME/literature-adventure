const express = require('express');
const router = new express.Router();
const {getEmployees} = require("../controllers/employee.controller.js");

router.get('/employees', getEmployees);

module.exports = router;