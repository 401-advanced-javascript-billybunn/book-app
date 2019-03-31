'use strict';

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
