'use strict';

const client = require('../../../../index.js');


module.exports = (request, response, next) => {
  console.log('delete book');

  let SQL = 'DELETE FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(response.redirect('/'))
    .catch(error => {
      response.render('pages/error', { error: error })
    });
}
