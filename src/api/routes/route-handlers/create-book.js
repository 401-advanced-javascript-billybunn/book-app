'use strict';

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
