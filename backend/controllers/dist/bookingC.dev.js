"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBooking = exports.updateBooking = exports.getBookingById = exports.getAllBookings = exports.createBooking = void 0;

var _bookingM = _interopRequireDefault(require("../models/bookingM.js"));

var _flightM = _interopRequireDefault(require("../models/flightM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Controller to handle flight booking creation
var createBooking = function createBooking(req, res) {
  var newBooking, flight, economySeats, businessSeats, savedBooking, updatedFlight;
  return regeneratorRuntime.async(function createBooking$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Received data for booking:', req.body);
          newBooking = new _bookingM["default"](req.body); // Assuming you have variables economy and business defined somewhere

          _context.next = 5;
          return regeneratorRuntime.awrap(_flightM["default"].findById(newBooking.flight_id));

        case 5:
          flight = _context.sent;

          if (flight) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            error: 'Flight not found'
          }));

        case 8:
          economySeats = flight.seatAvailability.economy;
          businessSeats = flight.seatAvailability.business;

          if (!(newBooking.flightClass === 'economy' && economySeats < newBooking.adults + newBooking.children)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: 'Not enough economy seats available'
          }));

        case 14:
          if (!(newBooking.flightClass === 'business' && businessSeats < newBooking.adults + newBooking.children)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: 'Not enough business seats available'
          }));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(newBooking.save());

        case 18:
          savedBooking = _context.sent;
          console.log('Booking created successfully:', savedBooking); // Update seat availability after successful booking

          if (newBooking.flightClass === 'economy') {
            economySeats = economySeats - newBooking.adults - newBooking.children;
          } else if (newBooking.flightClass === 'business') {
            businessSeats = businessSeats - newBooking.adults - newBooking.children;
          }

          _context.next = 23;
          return regeneratorRuntime.awrap(_flightM["default"].findByIdAndUpdate(newBooking.flight_id, {
            $set: {
              seatAvailability: {
                economy: economySeats,
                business: businessSeats
              }
            }
          }, {
            "new": true
          }));

        case 23:
          updatedFlight = _context.sent;
          console.log('Flight updated successfully:', updatedFlight);
          res.status(201).json(savedBooking);
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.error('Error creating booking:', _context.t0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
}; // Controller to get all flight bookings


exports.createBooking = createBooking;

var getAllBookings = function getAllBookings(req, res) {
  var bookings;
  return regeneratorRuntime.async(function getAllBookings$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_bookingM["default"].find());

        case 3:
          bookings = _context2.sent;
          res.status(200).json(bookings);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Controller to get a specific flight booking by ID


exports.getAllBookings = getAllBookings;

var getBookingById = function getBookingById(req, res) {
  var booking, flight;
  return regeneratorRuntime.async(function getBookingById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_bookingM["default"].findById(req.params.bookingId));

        case 3:
          booking = _context3.sent;

          if (!booking) {
            _context3.next = 11;
            break;
          }

          _context3.next = 7;
          return regeneratorRuntime.awrap(_flightM["default"].findById(booking.flight_id));

        case 7:
          flight = _context3.sent;
          res.status(200).json({
            booking: booking,
            flight: flight
          });
          _context3.next = 12;
          break;

        case 11:
          res.status(404).json({
            message: "Booking not found"
          });

        case 12:
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: _context3.t0.message
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
}; // Controller to update a specific flight booking by ID


exports.getBookingById = getBookingById;

var updateBooking = function updateBooking(req, res) {
  var updatedBooking;
  return regeneratorRuntime.async(function updateBooking$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_bookingM["default"].findByIdAndUpdate(req.params.bookingId, req.body, {
            "new": true
          }));

        case 3:
          updatedBooking = _context4.sent;

          if (updatedBooking) {
            res.status(200).json(updatedBooking);
          } else {
            res.status(404).json({
              message: "Booking not found"
            });
          }

          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            error: _context4.t0.message
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Controller to delete a specific flight booking by ID


exports.updateBooking = updateBooking;

var deleteBooking = function deleteBooking(req, res) {
  var deletedBooking;
  return regeneratorRuntime.async(function deleteBooking$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_bookingM["default"].findByIdAndDelete(req.params.bookingId));

        case 3:
          deletedBooking = _context5.sent;

          if (deletedBooking) {
            res.status(200).json({
              message: "Booking deleted successfully"
            });
          } else {
            res.status(404).json({
              message: "Booking not found"
            });
          }

          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            error: _context5.t0.message
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteBooking = deleteBooking;