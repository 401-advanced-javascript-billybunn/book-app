'use strict';

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
