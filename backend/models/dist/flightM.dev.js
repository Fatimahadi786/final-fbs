"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FlightSchema = new _mongoose["default"].Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  airlineLogo: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  journeyDate: {
    type: Date,
    // Assuming date, modify if needed
    required: true
  },
  returnDate: {
    type: Date,
    // Assuming date, modify if needed
    required: true
  },
  journeyAirport: {
    type: String,
    required: true
  },
  arrivalAirport: {
    type: String,
    required: true
  },
  journeyTime: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  },
  hour: {
    type: Number,
    required: true
  },
  seat: {
    economy: {
      type: Number,
      required: true,
      "default": 3,
      min: 0 // Ensure seat count is non-negative

    },
    business: {
      type: Number,
      required: true,
      "default": 3,
      min: 0 // Ensure seat count is non-negative

    }
  },
  seatAvailability: {
    economy: {
      type: Number,
      "default": 0,
      min: 0
    },
    business: {
      type: Number,
      "default": 0,
      min: 0
    }
  },
  fare: {
    economy: {
      adult: {
        type: Number,
        required: true,
        min: 0
      },
      infant: {
        type: Number,
        required: true,
        min: 0
      },
      child: {
        type: Number,
        required: true,
        min: 0
      }
    },
    business: {
      adult: {
        type: Number,
        required: true,
        min: 0
      },
      infant: {
        type: Number,
        required: true,
        min: 0
      },
      child: {
        type: Number,
        required: true,
        min: 0
      }
    }
  }
});

var _default = _mongoose["default"].model('Flight', FlightSchema);

exports["default"] = _default;