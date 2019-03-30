'use strict';

require('dotenv').config();

// Database Setup

// Connects to postgreSQL
const postgresConnect = () => {
  const pg = require('pg');

  const client = new pg.Client(process.env.DATABASE_URL);
  client.connect();
  client.on('error', err => console.error(err));
  module.exports = client;
}

// Connects to MongoDB
const mongoConnect = () => {
  throw null;
  // const mongoose = require('mongoose');

  // const mongooseOptions = {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  // };
  // mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
}

// Looks at env variable and connects to appropriate database
(process.env.DB === 'mongo' ? mongoConnect : postgresConnect)();

require('./src/server.js').start(process.env.PORT);
