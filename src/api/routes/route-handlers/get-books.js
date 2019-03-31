'use strict';

const client = require('../../../../index.js');

// function that takes search results from a database and renders them to the client with ejs

module.exports = (request, response, next) => {
  console.log('get books');
  console.log('request.model:',request.model);

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
