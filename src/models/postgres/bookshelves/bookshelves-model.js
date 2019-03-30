'use strict';

const client = require('../../../../index.js');
const Model = require('./../postgres-model.js')

class Bookshelves extends Model { }

module.exports = new Bookshelves(client);
