'use strict';

/**
 * Get Books Route Handler
 * @module routes/route-handlers/get-books
 */

/**
 * Retrieves a all book from the database. Renders them to the client with ejs.
 * @example router.get('/books', getBooks);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('ran get-books.js');
  console.log(request.param.model);
  request.model.get()
    .then(results => {
      console.log('ran get in get-books');
      if (results.rows.rowCount === 0) {
        response.render('pages/searches/new');
      } else {
        response.render('pages/index', { books: results.rows })
      }
    })
    .catch(error => {
      response.render('pages/error', { error: error })
    });
}
