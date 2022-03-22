const express = require('express');
const router = new express.Router();
const getClients = require("../controllers/client.controller.js");

router.get('/animes', getClients);

module.exports = router;