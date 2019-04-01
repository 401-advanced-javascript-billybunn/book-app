'use strict';
/**
 * New Search Route Handler
 * @module routes/route-handlers/new-search
 */

/**
 * Renders the search form view to the client with ejs.
 * @example router.get('/searches/new', newSearch);
 * @param req {object} Express Request Object (required params: model, id)
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (request, response, next) => {
  console.log('new search');
  response.render('pages/searches/new');
}
