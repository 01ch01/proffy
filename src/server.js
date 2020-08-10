// data
const proffys = [
  {
    name: 'Rayanne B. Lima',
    avatar:
      'https://avatars1.githubusercontent.com/u/28320844?s=400&u=4ac13a0e65f03d477029f6661ececfee56c320ef&v=4',
    whatsapp: '321654987',
    bio:
      'Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umas das minhas explosões.',
    subject: 'Química',
    cost: '20',
    weekday: [2],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: 'Cláudio Henrique',
    avatar:
      'https://avatars0.githubusercontent.com/u/38019405?s=460&u=d309c1dd8459076ee62f0e4fd3e8d8a28385224e&v=4',
    whatsapp: '321654987',
    bio:
      'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umas das minhas explosões.',
    subject: 'Química',
    cost: '20',
    weekday: [2],
    time_from: [720],
    time_to: [1220],
  },
];

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
