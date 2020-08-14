const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
  // CRUD == Create, Read, Update, Delete

  // create data
  proffyValue = {
    name: 'Rayanne B. Lima',
    avatar:
      'https://avatars1.githubusercontent.com/u/28320844?s=400&u=4ac13a0e65f03d477029f6661ececfee56c320ef&v=4',
    whatsapp: '321654987',
    bio:
      'Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umas das minhas explosões.',
  };

  classValue = {
    // proffy_id come through the own database
    subject: 1,
    cost: '20',
  };

  classScheduleValues = [
    // class_id come through the database, after class registration
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // read data
  const selectedProffys = await db.all('SELECT * FROM proffys');
  // console.log(selectedProffys);

  // read classes from a specific proffy as your data
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `);
  // console.log(selectClassesAndProffys);

  /** Business Rule Logic
   * E.g.: The proffy is avaliable from 8am to 6pm
   * Well, time_from (8am) must be <= than the user schedule
   * Likewise, time_to (6pm) must be > than the user schedule
   */

  const selectClassesSchedules = await db.all(`
    SELECT class_schedules.*
    FROM class_schedules
    WHERE class_schedules.class_id = '1'
    AND class_schedules.weekday = '0'
    AND class_schedules.time_from <= '520'
    AND class_schedules.time_to > '520'
    `);

  console.log(selectClassesSchedules);
});
