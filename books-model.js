'use strict';

const client = require('./index.js');


class Model {
  constructor(client) {
    this.client = client;
  }
  get(_id) {
    let SQL = 'SELECT * FROM books;';
    return this.client.query(SQL)
  }

  post(record) {
    // let newRecord = new this.schema(record);
    // return newRecord.save();
  }

  put(_id, record) {
    // return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    // return this.schema.findByIdAndDelete(_id);
  }
}

class Books extends Model { }

module.exports = new Books(client);
