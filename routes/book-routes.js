const express = require('express');
const { GetAllBooks, PostBook, updateBook, deleteBook, SingleBook } = require('../controller/books-controller');

const router = express.Router();

// GET all books
router.get('/', GetAllBooks);

// GET single book by ID
router.get('/:id', SingleBook);

// POST a new book
router.post('/', PostBook);

// Update a book by ID
router.patch('/:id', updateBook);

// DELETE a book by ID
router.delete('/:id', deleteBook);

module.exports = router;
