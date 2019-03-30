'use strict';

const cwd = process.cwd();

// 3rd Party Resources
const express = require('express');

// const superagent = require('superagent');
const methodOverride = require('method-override');

// Prepare the express app
const app = express();

// Esoteric resources
const errorHandler = require( `${cwd}/src/middleware/500.js`);
const notFound = require( `${cwd}/src/middleware/404.js` );
const v1Router = require( `${cwd}/src/api/v1.js` );

// // Database Setup
// const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();
// client.on('error', err => console.error(err));

// Application Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    // look in urlencoded POST bodies and delete it
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}))

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// Routes
app.use(v1Router);

// Catchalls
app.use(notFound);
app.use(errorHandler);

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = {app,start};
