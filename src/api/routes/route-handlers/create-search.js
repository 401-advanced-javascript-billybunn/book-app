'use strict';
/**
 * Create Search Route Handler
 * @module routes/route-handlers/create-search
 */


const superagent = require('superagent');
const Book = require('../../../models/book-class.js')

/**
 * Makes a call to the Google Books API. Renders view with search results to the client with ejs.
 * @example router.post('/searches', createSearch);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('create search');

  let url = 'https://www.googleapis.com/books/v1/volumes?q=';

  if (request.body.search[1] === 'title') { url += `+intitle:${request.body.search[0]}`; }
  if (request.body.search[1] === 'author') { url += `+inauthor:${request.body.search[0]}`; }

  superagent.get(url)
    .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))
    .then(results => response.render('pages/searches/show', { results: results }))
    .catch(error => {
      response.render('pages/error', { error: error })
    });
}
