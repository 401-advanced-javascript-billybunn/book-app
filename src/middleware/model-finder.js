'use strict';

module.exports = (req,res,next) => {
  // let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
  // req.model = require(`../models/${modelName}/${modelName}-model.js`);

  // req.param()

  req.model = require('../models/postgres/books/books-model.js');
  next();
};
