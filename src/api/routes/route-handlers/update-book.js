'use strict';
/**
 * Update Book Route Handler
 * @module routes/route-handlers/update-book
 */

/**
 * Updates the bookshelf of a book and writes change to the database
 * @example router.put('/books/1', updateBook);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('update-book.js');

  let { title, author, isbn, image_url, description, bookshelf_id } = request.body;
  let values = [title, author, isbn, image_url, description, bookshelf_id, request.params.id];

  // updates a book's bookshelf foreign key in the books table/collection
  request.model.put(values)
  // client.query(SQL, values)
    .then(response.redirect(`/books/${request.params.id}`))
    .catch(error => {
      response.render('pages/error', { error: error })
    });
}
