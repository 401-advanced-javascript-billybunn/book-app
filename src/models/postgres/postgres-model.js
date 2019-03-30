'use strict';

class Model {
  constructor(client) {
    this.client = client;
    // this.bookshelves = 
  }

  get(_id) {
    if (_id) {
      console.log('Find me a specific book!!!')

      // if an id is passed in

      // SQL query to get all the bookshelves in the db
      // attach results to request object - this.shelves = result

      // SQL query to get the specific book info from the db

      // return this.client.query(SQL, id)

    } else {
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
