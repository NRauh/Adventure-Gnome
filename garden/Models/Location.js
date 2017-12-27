const Sequelize = require('sequelize');
const db = require('../db-connection');

const Location = db.define('location', {
  lat: {
    type: Sequelize.DOUBLE
  },
  lng: {
    type: Sequelize.DOUBLE
  },
  date: {
    type: Sequelize.STRING
  }
});

// Location.sync({force: true}).then(() => {
//   console.log('Location model added');
// }).catch((err) => {
//   console.log('Error creating Location model:', err);
// });

// module.exports = Location;
module.exports = {
  findAll: () => {}
}
