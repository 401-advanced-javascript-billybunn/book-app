'use strict';
/**
 * Create Book Route Handler
 * @module routes/route-handlers/create-book
 */

/**
 * Adds a single book to the database with a bookshelf identifier.
 * @example router.post('/books', createBook);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('create-book.js');

  // returns the unique identifier for a bookshelf
  request.model.createShelf(request.body.bookshelf)
    .then(id => {
      let { title, author, isbn, image_url, description } = request.body;
      let values = [title, author, isbn, image_url, description, id];

      // adds a book to the database with values from the request.body
      request.model.post(values)
      // client.query(SQL, values)
        .then(result => response.redirect(`/books/${result.rows[0].id}`))
        .catch(error => {
          response.render('pages/error', { error: error })
        });
    })
}
