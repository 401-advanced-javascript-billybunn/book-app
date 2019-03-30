'use strict';

// const cwd = process.cwd(); // needed later for "model finder"

const express = require('express');
const app = express();

const swagger = require('swagger-ui-express');
// const superagent = require('superagent');

// const client = require('../../index.js');

const routes = require('../routes/routes.js');


// const modelFinder = require(`${cwd}/src/middleware/model-finder.js`); // needed to evaluate the model dynamically
const swaggerDocs = require('../../docs/config/swagger.json');

const router = express.Router();

// Evaluate the model, dynamically
// router.param('model', modelFinder); // TODO: enable this for postgres bookapp

// API Routes
router.use(routes);

router.use('/api/v1/doc', swagger.serve, swagger.setup(swaggerDocs));

module.exports = router;
