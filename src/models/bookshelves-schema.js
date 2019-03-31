'use strict';

const books = require('./books-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

teams.virtual('books', {
  ref: 'books',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});
/**
 * @param  {} 'find'
 * @param  {} function(
 * @param  {} {try{this.populate('books'
 * @param  {} ;}catch(e
 * @param  {} {console.error('FindError'
 * @param  {} e
 * @param  {} ;}}
 */
teams.pre('find', function() {
  try {
    this.populate('books');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('teams', teams);