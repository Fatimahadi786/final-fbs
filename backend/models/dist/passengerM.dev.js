"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PassengerSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    "enum": ["male", "female", "other"],
    // Add other gender options as needed
    required: true
  }
});

var _default = _mongoose["default"].model("Passenger", PassengerSchema);

exports["default"] = _default;