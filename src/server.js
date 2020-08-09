const proffys = [
  {
    name: 'Diego Fernandes',
    avatar:
      'https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
    whatsapp: '321654987',
    bio:
      'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umas das minhas explosões.',
    subject: 'Química',
    cost: '20',
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: 'Daniele Evangelista',
    avatar:
      'https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
    whatsapp: '321654987',
    bio:
      'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umas das minhas explosões.',
    subject: 'Química',
    cost: '20',
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];

function pageLanding(req, res) {
  return res.render('index.html');
}

function pageStudy(req, res) {
  return res.render('study.html', {proffys });
}

function pageGiveClasses(req, res) {
  return res.render('give-classes.html');
}

const express = require('express');
const server = express();

// setting nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  // configure static files (css, scripts, images etc)
  .use(express.static('public'))
  // application routes
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .listen(5500);
