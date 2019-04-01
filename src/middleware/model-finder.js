'use strict';

module.exports = (req, res, next) => {
  console.log('ran model finder!');
  // console.log(req.params);

  const database = process.env.DB;
  // console.log('DB:', typeof database, database);
  req.model = require(`../models/${database}-model.js`);
  // console.log('request.model:',req.model);
  next();
};
