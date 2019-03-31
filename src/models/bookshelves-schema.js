'use strict';

const books = require('./books-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const bookshelves = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

bookshelves.virtual('books', {
  ref: 'books',
  localField: 'name',
  foreignField: 'bookshelf_id',
  justOne:false,
});

bookshelves.pre('find', function() {
  try {
    this.populate('books');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('bookshelves', bookshelves);
