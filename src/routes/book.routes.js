const express = require('express');

const router = new express.Router();

const {getBooks, addBook} = require('../controllers/book.controller.js')

router.get('/books', getBooks);
router.post('/books', addBook );
module.exports = router;