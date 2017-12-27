jest.mock('../../Models/Location');
const LocationController = require('../LocationController');
const Location = require('../../Models/Location');

beforeEach(() => {
  Location.findAll.mockImplementation(() => {
    return new Promise((resolve) => resolve([]))
  });
});

describe.only('LocationController', () => {
  let mockRes = {};

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
  });

  describe('getLocations', () => {
    it('should try to find all locations', () => {
      LocationController.getLocations({}, mockRes);
      expect(Location.findAll).toHaveBeenCalled();
    });

    it('should return json if successful', async () => {
      await LocationController.getLocations({}, mockRes);
      expect(mockRes.json).toHaveBeenCalledWith({
        locations: []
      });
    });

    it('should handle errors finding locations', async () => {
      Location.findAll.mockImplementation(() => {
        return new Promise((resolve, reject) => reject());
      });
      await LocationController.getLocations({}, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        err: 'Unable to retrieve locations'
      });
    });
  });

  describe('addLocation', () => {
    it('should require lat parameter');

    it('should require lng parameter');

    it('should require date parameter');

    it('should try to create the location');

    it('should return the new location if it is created');

    it('should return an error message if it was not created');
  });
});
