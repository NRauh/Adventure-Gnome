const Location = require('../Models/Location');

module.exports = {
  getLocations: function(req, res) {
    return res.json({
      locations: []
    });
  },

  addLocation: function(req, res) {
    if (!req.body.lat) {
      res.status(400);
      return res.json({
        err: 'Missing lat'
      });
    }

    if (!req.body.lng) {
      res.status(400);
      return res.json({
        err: 'Missing lng'
      });
    }

    if (!req.body.date) {
      res.status(400);
      return res.json({
        err: 'Missing date'
      });
    }

    Location.create({
      lat: req.body.lat,
      lng: req.body.lng,
      date: req.body.date
    }).then((location) => {
      return res.json(location);
    }).catch(() => {
      res.status(500);
      return res.json({
        err: 'Unable to add location'
      });
    });
  }
}