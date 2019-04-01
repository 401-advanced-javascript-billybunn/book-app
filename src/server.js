'use strict';

const express = require('express');
const app = express();

// Esoteric Resources
const routes = require('../src/api/routes/routes.js');
const errorHandler = require('../src/middleware/500.js');
const notFound = require( '../src/middleware/404.js' );

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

app.use('/docs', express.static('docs'));


// Routes
app.use(routes);

// Catchalls
app.use(notFound);
app.use(errorHandler);

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = {app,start};
