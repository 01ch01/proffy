// server
const express = require('express');
const server = express();

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require('./pages');

// setting nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

// server init and configuration
server
  // receive req.body data
  .use(express.urlencoded({ extended: true }))

  // configure static files (css, scripts, images etc)
  .use(express.static('public'))
  // application routes
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-classes', saveClasses)
  // start server
  .listen(5500);
