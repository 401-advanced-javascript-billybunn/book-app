'use strict';
/**
 * Get Book Route Handler
 * @module routes/route-handlers/get-book
 */

/**
 * Retrieves a single book's details from the database. Renders view to the client with ejs.
 * @example router.get('/books/:id', getBook);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('get-book.js');
  // gets all records from the bookshelves table/collection
  request.model.getBookshelves()
    .then(shelves => {
      let id = [request.params.id];
      // gets a single book (in an array at [0])
      request.model.get(id)
        .then(result => {
          console.log(shelves.rows)
          response.render('pages/books/show', { book: result.rows[0], bookshelves: shelves.rows })
        })
        .catch(error => {
          response.render('pages/error', { error: error })
        });
    })
}
