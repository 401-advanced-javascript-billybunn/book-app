![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================
<!-->
├── index.js
├── src/
│   ├── server.js
│   ├── api/
│   │   └── v1.js
│   ├── middleware/
│   │   ├── 500.js
│   │   ├── 404.js
│   │   └── model-finder.js
│   ├── pg-models/
│   │   ├── books/
│   │   │   ├── pg-model.js
│   │   │   ├── books-model.js
│   │   │   └── books-schema.sql
│   │   └── pg-model.js
│   └── mongo-models/
│       ├── books/
│       │   ├── pg-model.js
│       │   ├── books-model.js
│       │   └── books-schema.sql
│       ├── memory-model.js
│       └── mongo-model.js
├── public/
└── views/
-->

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/book-app/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/book-app/builds/106408585
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: https://billybunn-book-app-postgres.herokuapp.com/
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

## Book App v2

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
* [back-end][3]
<!-- (when applicable) -->
* [front-end][4]

#### Documentation
<!-- API assignments only -->
* [swagger][5]
<!-- (All assignments) -->
* [jsdoc][6]

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
<!-- If you finished everything, you should be able to copy/paste the lab requirements and put them in present tense. -->
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db


#### Running the app
* `npm start`
* Endpoint: `/`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
