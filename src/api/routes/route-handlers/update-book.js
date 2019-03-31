'use strict';

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
