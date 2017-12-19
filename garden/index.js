const express = require('express');
const app = express();
const LocationController = require('./Controllers/LocationController');

app.get('/', (req, res) => {
  return res.send('<h1>Gnome Garden</h1>');
});

app.get('/v1/locations', LocationController.getLocations);

app.post('/v1/locations', LocationController.addLocation);

app.listen(4000, () => {
  console.log('Listening on port 4000');
});