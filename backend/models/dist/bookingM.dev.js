"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passengerM = _interopRequireDefault(require("./passengerM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the Passenger schema
var BookingSchema = new _mongoose["default"].Schema({
  flightType: {
    type: String,
    "enum": ["one-way", "round-way"],
    required: true
  },
  flightClass: {
    type: String,
    "enum": ["economy", "business", "first"],
    required: true
  },
  departureAirport: {
    type: String,
    required: true
  },
  arrivalAirport: {
    type: String,
    required: true
  },
  passengers: {
    type: [_passengerM["default"].schema],
    // An array of PassengerSchema
    required: true
  }
});

var _default = _mongoose["default"].model("FlightBooking", BookingSchema);

exports["default"] = _default;