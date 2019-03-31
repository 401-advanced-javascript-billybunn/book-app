'use strict';

const client = require('../../../../index.js');

// function that takes search results from a database and renders them to the client with ejs

module.exports = (request, response, next) => {
  console.log('get books');
  // console.log('request.model:',request.model);

  // let SQL = 'SELECT * FROM books;';

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
