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

function getSubject(subjectNumber) {
  const pos = +subjectNumber - 1;
  return subjects[pos];
}

function convertHoursToMinutes(time) {
  const [hours, minutes] = time.split(':');
  const calc = hour * 60 + minutes;
  return Number(calc);
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
};
