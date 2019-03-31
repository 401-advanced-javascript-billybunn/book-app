'use strict';

module.exports = (request, response, next) => {
  console.log('new search');
  response.render('pages/searches/new');
}
