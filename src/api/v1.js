'use strict';

// 3rd Party Resources
const express = require('express');
const router = express.Router();
const swagger = require('swagger-ui-express');

// Esoteric resources - Route Handlers
const getBooks = require('');
const createSearch = require('');
const newSearch = require('');
const getBook = require('');
const createBook = require('');
const updateBook = require('');
const deleteBook = require('');


// API Routes
router.get('/', getBooks);
router.post('/searches', createSearch);
router.get('/searches/new', newSearch);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
