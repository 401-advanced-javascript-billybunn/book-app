'use strict';

const client = require('../../../../index.js');


module.exports = (request, response, next) => {
  console.log('create books');

  let SQL = 'SELECT * FROM books;';

  return client.query(SQL)
    .then(results => {
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
