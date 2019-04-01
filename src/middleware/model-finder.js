'use strict';
/**
 * Model Finder Middleware
 * @module middleware/model-finder
 */

/**
 * Model Finder Middleware
 * Evaluates the DB env variable and attaches a database model the the request object body (either postgres or mongo). Returns an instance of the specified model.
 * @param req {object} Express Request Object
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (req, res, next) => {
  console.log('ran model finder!');
  // console.log(req.params);

  const database = process.env.DB;
  // console.log('DB:', typeof database, database);
  req.model = require(`../models/${database}-model.js`);
  // console.log('request.model:',req.model);
  next();
};
