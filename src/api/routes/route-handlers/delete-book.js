'use strict';
/**
 * Delete Book Route Handler
 * @module routes/route-handlers/delete-book
 */

/**
 * Removes a single book from the database.
 * @example router.delete('/books/:id', deleteBook);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('delete-book.js');

  let id = [request.params.id];

  // removes a book record from the books table/collection
  request.model.delete(id)
    .then(response.redirect('/'))
    .catch(error => {
      response.render('pages/error', { error: error })
    });
}
