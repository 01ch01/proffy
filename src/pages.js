const Database = require('./database/db');

const {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
} = require('./utils/format');

function pageLanding(req, res) {
  return res.render('index.html');
}

function pageStudy(req, res) {
  const filters = req.query;

  if (!filters.subject || !filters.weekday || !filters.time) {
    return res.render('study.html', { filters, subjects, weekdays });
  }
  console.log('There is no empty inputs');

  const timeToMinutes = convertHoursToMinutes(filters.time);

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
      SELECT class_schedules.*
      FROM class_schedules
      WHERE class_schedules.class_id = classes.id
      AND class_schedules.weekday = ${filters.weekday}
      AND class_schedules.time_from <= ${timeToMinutes}
      AND class_schedules.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filters.subject}
  `;

  try {
    
  } catch (error) {
    console.log(error);
  }
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

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses,
};
