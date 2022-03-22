const express = require('express');
const router = new express.Router();
const {getClients, addClients} = require("../controllers/client.controller.js");

router.get('/clients', getClients);
router.post('/clients', addClients)
module.exports = router;