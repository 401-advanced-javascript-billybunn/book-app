'use strict';

const client = require('../../index.js');

class Model {
  constructor(client) {
    this.client = client;
    console.log('in the model');

  }
  get(id) {
    // getBook
    if (id) {
      // do some stuff to get a single book from posgreSQL
    }

    // getBooks
    else {
      console.log('ran else pgmodel');
      // do some stuff to get all the books from posgreSQL
      let SQL = 'SELECT * FROM books;';
      return this.client.query(SQL)
    }
  }

  post(id) {
    // add a book to the SQL database
  }

  put(id) {
    // edit a book's bookshelf in the SQL db
  }

  delete(id) {
    // delete a book from the SQL db
  }


}

/* 

get(id)
// if no id is passed in, 
creates a SQL query to get all records from the books table
 let SQL = 'SELECT * FROM books;';

  return client.query(SQL)

  

post()


put()


delete()


*/
// module.exports = Model;


class Books extends Model { }

module.exports = new Books(client);
