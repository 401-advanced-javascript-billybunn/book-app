'use strict';

class Model {
  constructor(client) {
    this.client = client;
    // this.bookshelves = 
  }

  get(id) {
    // GET for a single book
    if (id) {
      // Query the SQL db for all the bookshelves
      let SQL = 'SELECT DISTINCT id, name FROM bookshelves ORDER BY name;';
      return this.client.query(SQL)
        .then(shelves => {
          // Print out all the shelves (id's, names)
          console.log(shelves.rows)
          // Attach them to the request object (req.model.shelves)
          this.shelves = shelves;

          // Query the SQL db for the specific book
          let SQL = 'SELECT books.*, bookshelves.name FROM books INNER JOIN bookshelves on books.bookshelf_id=bookshelves.id WHERE books.id=$1;';
          let values = [parseInt(id)];
          return this.client.query(SQL, values)
        })
    }
    // GET for all books (home page)
    else {
      let SQL = 'SELECT * FROM books;';
      return this.client.query(SQL)
    }
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

// function createShelf(shelf) {
//   let normalizedShelf = shelf.toLowerCase();
//   let SQL1 = `SELECT id from bookshelves where name=$1;`;
//   let values1 = [normalizedShelf];

//   return client.query(SQL1, values1)
//     .then(results => {
//       if (results.rowCount) {
//         return results.rows[0].id;
//       } else {
//         let INSERT = `INSERT INTO bookshelves(name) VALUES($1) RETURNING id;`;
//         let insertValues = [shelf];

//         return client.query(INSERT, insertValues)
//           .then(results => {
//             return results.rows[0].id;
//           })
//       }
//     })
// }

module.exports = Model;
