const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação Física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

// features

function getSubject(subjectNumber) {
  const pos = +subjectNumber - 1;
  return subjects[pos];
}

function pageLanding(req, res) {
  return res.render('index.html');
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render('study.html', { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;

  const isEmpty = () => {
    return Object.keys(data).length == 0;
  };

  // add data to proffys array
  if (!isEmpty()) {
    // convert subject number in subject name
    data.subject = getSubject(data.subject);

    proffys.push(data);
    return res.redirect('/study');
  }

  // if there is no data, show page
  return res.render('give-classes.html', { subjects, weekdays });
}

// server
const express = require('express');
const server = express();

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
