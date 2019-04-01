'use strict';

// const bookshelvesSchema = require('./bookshelves-schema.js')

class MongoDBModel {
  constructor(schema) {
    this.schema = schema;
    console.log('ran mongomodel constructor');
  }

  get(id) {
    // Reformats the mongo result to a promise that resolves
    // to an object with the structure a SQL result
    // because that's what the views expect.
    if (id) {
      // getBook returns book data at [0], and shelf data at [1]
      const bookData = this.schema.findById(id).then(book => {
        const data = { rows: [book], rowCount: [book].length };
        return new Promise(resolve => resolve(data));
      });
      // get all the bookshelves
      const shelfData = bookshelvesSchema.find().then(shelves => {
        const data = { rows: shelves, rowCount: shelves.length };
        return new Promise(resolve => resolve(data));
      });
      return Promise.all([bookData, shelfData]);
    } else {
      // getBooks just returns book data
      return this.schema.find().then(result => {
        const data = { rows: result, rowCount: result.length };
        return new Promise(resolve => resolve([data]));
      });
    }
  }

  // get(id) {
  //   console.log('ran mongo get');
  //   console.log(id);

  //   let queryObject = id ? { id } : {};
  //   return this.schema.find(queryObject);
  // }

  // post(record) {
  //   console.log('ran mongo post')
  //   console.log(record);

  //   let newRecord = new this.schema(record);
  //   return newRecord.save();
  // }

  // put(id, record) {
  //   console.log('ran mongo put')
  //   console.log(id, record);


  //   return this.schema.findByIdAndUpdate(id, record, { new: true });
  // }

  // delete(id) {
  //   console.log('ran mongo delete')

  //   return this.schema.findByIdAndDelete(id);
  // }

}

// const booksSchema = require('./books-schema.js')
// console.log(booksSchema);
const booksSchema = require('./books-schema.js')

// class Bookshelves extends MongoDBModel { }
// const Bookshelf = new Bookshelves(bookshelvesSchema);

// class Books extends MongoDBModel { }
// const Book = new Books(booksSchema)
// module.exports = new Books(booksSchema);


const Book = new MongoDBModel(booksSchema)

module.exports = Book;
