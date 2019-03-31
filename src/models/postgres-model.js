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
      let SQL = 'SELECT books.*, bookshelves.name FROM books INNER JOIN bookshelves on books.bookshelf_id=bookshelves.id WHERE books.id=$1;';
      return this.client.query(SQL, id)
    }

    // getBooks
    else {
      console.log('ran else pgmodel');
      // do some stuff to get all the books from posgreSQL
      let SQL = 'SELECT * FROM books;';
      return this.client.query(SQL)
    }
  }

  // helper for getBook - gets all records for booksehelves table
  getBookshelves() {
    let SQL = 'SELECT DISTINCT id, name FROM bookshelves ORDER BY name;';
    return this.client.query(SQL);
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
