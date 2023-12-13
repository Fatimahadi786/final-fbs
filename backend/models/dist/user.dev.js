"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  username: {
    type: String // required: true,
    //  unique: true,

  },
  phoneNo: {
    type: String // required: true,
    // unique: true,

  },
  email: {
    type: String // required: true,
    // unique: true,

  },
  verifyemail: {
    type: String // required: true,
    // unique: true,

  },
  password: {
    type: String // required: true,

  },
  confirmPassword: {
    type: String // required: true,

  },
  isAdmin: {
    type: Boolean,
    "default": true
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("User", UserSchema);

exports["default"] = _default;