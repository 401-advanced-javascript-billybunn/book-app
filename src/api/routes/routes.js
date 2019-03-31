'use strict';

// 3rd Party Resources
const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

// Middleware to attach a 'model' to each request object
const modelFinder = require('../../middleware/model-finder.js');

// Route Handlers
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

router.use(modelFinder);

// API Routes
router.get('/', getBooks); // reads from DB //
router.post('/searches', createSearch); // superagent
router.get('/searches/new', newSearch); // renders a page
router.get('/books/:id', getBook); // reads 1 from DB //
router.post('/books', createBook); // adds 1 to DB //
router.put('/books/:id', updateBook); // edits 1 to DB //
router.delete('/books/:id', deleteBook); // deletes 1 from DB //

module.exports = router;
