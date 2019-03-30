'use strict';

require('dotenv').config();
const pg = require('pg');

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));
module.exports = client;

require('./src/server.js').start(process.env.PORT);
