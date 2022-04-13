const express = require('express');

const router = new express.Router();

const {getBooks, addBook, addAuthor} = require('../controllers/book.controller.js')

router.get('/books', getBooks);
router.post('/books', addBook );
router.post('/authors', addAuthor)
module.exports = router;