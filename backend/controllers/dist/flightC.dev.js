"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFlight = exports.getFlightById = exports.updateFlight = exports.createFlight = exports.getFlightByNumber = exports.getFlightByDate = exports.getAllFlights = void 0;

var _flightM = _interopRequireDefault(require("../models/flightM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Controller to handle fetching all flights
var getAllFlights = function getAllFlights(req, res, next) {
  var flights;
  return regeneratorRuntime.async(function getAllFlights$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_flightM["default"].find());

        case 3:
          flights = _context.sent;
          console.log(flights);
          res.status(200).json({
            success: true,
            flights: flights
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getAllFlights = getAllFlights;

var getFlightByDate = function getFlightByDate(req, res, next) {
  var date, flight;
  return regeneratorRuntime.async(function getFlightByDate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          date = req.params.date;
          console.log(date);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_flightM["default"].find({
            journeyDate: date
          }));

        case 5:
          flight = _context2.sent;

          if (flight) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            success: false,
            message: 'Flight not foundd',
            flight: []
          }));

        case 8:
          res.status(200).json({
            success: true,
            flight: flight
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          next(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 11]]);
}; // Controller to handle fetching a single flight by flightNumber


exports.getFlightByDate = getFlightByDate;

var getFlightByNumber = function getFlightByNumber(req, res, next) {
  var flightNumber, flight;
  return regeneratorRuntime.async(function getFlightByNumber$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          flightNumber = req.params.flightNumber;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_flightM["default"].findOne({
            flightNumber: flightNumber
          }));

        case 4:
          flight = _context3.sent;

          if (flight) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            success: false,
            message: 'Flight not found'
          }));

        case 7:
          res.status(200).json({
            success: true,
            flight: flight
          });
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          next(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; // Controller to handle creating a new flight


exports.getFlightByNumber = getFlightByNumber;

var createFlight = function createFlight(req, res, next) {
  var newFlight;
  return regeneratorRuntime.async(function createFlight$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_flightM["default"].create(req.body));

        case 3:
          newFlight = _context4.sent;
          res.status(201).json({
            success: true,
            flight: newFlight
          });
          console.log("flight create", newFlight);
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // Controller to handle updating a flight by flightNumber


exports.createFlight = createFlight;

var updateFlight = function updateFlight(req, res, next) {
  var flightNumber, updatedFlight;
  return regeneratorRuntime.async(function updateFlight$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          flightNumber = req.params.flightNumber;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_flightM["default"].findOneAndUpdate({
            flightNumber: flightNumber
          }, req.body, {
            "new": true
          }));

        case 4:
          updatedFlight = _context5.sent;

          if (updatedFlight) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: 'Flight not found'
          }));

        case 7:
          res.status(200).json({
            success: true,
            flight: updatedFlight
          });
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          next(_context5.t0);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; // flightC.js
// flightC.js
// flightC.js
// flightC.js


exports.updateFlight = updateFlight;

var getFlightById = function getFlightById(req, res) {
  var flightId, flight;
  return regeneratorRuntime.async(function getFlightById$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          flightId = req.params.id;
          _context6.prev = 1;
          console.log('Flight ID:', flightId);
          _context6.next = 5;
          return regeneratorRuntime.awrap(FlightModel.findById(flightId));

        case 5:
          flight = _context6.sent;

          if (flight) {
            _context6.next = 8;
            break;
          }

          return _context6.abrupt("return", res.status(404).json({
            error: 'Flight not found'
          }));

        case 8:
          res.json(flight);
          _context6.next = 15;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          console.error('Error retrieving flight:', _context6.t0);
          res.status(500).json({
            error: 'Internal server error'
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 11]]);
}; // Controller to handle deleting a flight by flightNumber


exports.getFlightById = getFlightById;

var deleteFlight = function deleteFlight(req, res, next) {
  var flightNumber, deletedFlight;
  return regeneratorRuntime.async(function deleteFlight$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          flightNumber = req.params.flightNumber;
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(_flightM["default"].findOneAndDelete({
            flightNumber: flightNumber
          }));

        case 4:
          deletedFlight = _context7.sent;

          if (deletedFlight) {
            _context7.next = 7;
            break;
          }

          return _context7.abrupt("return", res.status(404).json({
            success: false,
            message: 'Flight not found'
          }));

        case 7:
          res.status(200).json({
            success: true,
            message: 'Flight deleted successfully'
          });
          _context7.next = 13;
          break;

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          next(_context7.t0);

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.deleteFlight = deleteFlight;