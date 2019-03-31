'use strict';

module.exports = (req, res, next) => {
  // console.log('ran model finder!');
  const database = process.env.DB;
  req.model = require(`../models/${database}-model.js`);
  console.log(req.model.get);
  next();
};
