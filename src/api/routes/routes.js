'use strict';

// 3rd Party Resources
const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

// Esoteric resources - Route Handlers
const getBooks = require('./route-handlers/get-books.js');
const createSearch = require('./route-handlers/create-search.js');
const newSearch = require('./route-handlers/new-search.js');
const getBook = require('./route-handlers/get-book.js');
const createBook = require('./route-handlers/create-book.js');
const updateBook = require('./route-handlers/update-book.js');
const deleteBook = require('./route-handlers/delete-book.js');


// Application Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.static('public'));

router.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    // look in urlencoded POST bodies and delete it
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}))



// API Routes
router.get('/', getBooks);
router.post('/searches', createSearch);
router.get('/searches/new', newSearch);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
