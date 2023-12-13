"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// FlightModel.js
var FlightModel =
/*#__PURE__*/
function () {
  function FlightModel() {
    _classCallCheck(this, FlightModel);

    this.mobileNumber = '';
    this.email = '';
    this.status = ''; // 'cancel' or 'delay'
  }

  _createClass(FlightModel, [{
    key: "setMobileNumber",
    value: function setMobileNumber(number) {
      this.mobileNumber = number;
    }
  }, {
    key: "setEmail",
    value: function setEmail(email) {
      this.email = email;
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this.status = status;
    }
  }]);

  return FlightModel;
}();

var _default = FlightModel;
exports["default"] = _default;