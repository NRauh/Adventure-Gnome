const Sequelize = require('sequelize');

const db = new Sequelize('GnomeGarden', null, null, {
  dialect: 'sqlite',
  storage: './gnome-garden.sqlite'
});

db.authenticate().then(() => {
  console.log('DB connection established');
}).catch((err) => {
  console.log('Unable to connect to DB:', err);
});

module.exports = db;
