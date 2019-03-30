'use strict';

const client = require('../../../../index.js');
const Model = require('./../postgres-model.js')

class Books extends Model { }

module.exports = new Books(client);
