const express = require('express');
const router = new express.Router();
const getClients = require("../controllers/client.controller.js");

router.get('/clients', getClients);

module.exports = router;