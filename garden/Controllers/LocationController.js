const Location = require('../Models/Location');

module.exports = {
  getLocations: async function(req, res) {
    let allLocations = [];

    try {
      allLocations = await Location.findAll()
    } catch(e) {
      res.status(500);
      return res.json({
        err: 'Unable to retrieve locations'
      });
    }

    return res.json({
      locations: allLocations
    });
  },

  addLocation: function(req, res) {
    // if (!req.body.lat) {
    //   res.status(400);
    //   return res.json({
    //     err: 'Missing lat'
    //   });
    // }

    // if (!req.body.lng) {
    //   res.status(400);
    //   return res.json({
    //     err: 'Missing lng'
    //   });
    // }

    // if (!req.body.date) {
    //   res.status(400);
    //   return res.json({
    //     err: 'Missing date'
    //   });
    // }

    // Location.create({
    //   lat: req.body.lat,
    //   lng: req.body.lng,
    //   date: req.body.date
    // }).then((location) => {
    //   return res.json(location);
    // }).catch(() => {
    //   res.status(500);
    //   return res.json({
    //     err: 'Unable to add location'
    //   });
    // });
  }
}