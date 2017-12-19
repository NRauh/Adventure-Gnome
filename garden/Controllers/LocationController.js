module.exports = {
  getLocations: function(req, res) {
    return res.json({
      locations: []
    });
  },

  addLocation: function(req, res) {
    return res.json({
      locationAdded: true
    });
  }
}