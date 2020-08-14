// server
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages');

// setting nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

// server init and configuration
server
  // configure static files (css, scripts, images etc)
  .use(express.static('public'))
  // application routes
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  // start server
  .listen(5500);
