"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FlightModel = _interopRequireDefault(require("./FlightModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FlightController =
/*#__PURE__*/
function () {
  function FlightController() {
    _classCallCheck(this, FlightController);

    this.model = new _FlightModel["default"]();
  }

  _createClass(FlightController, [{
    key: "setMobileNumber",
    value: function setMobileNumber(number) {
      this.model.setMobileNumber(number);
    }
  }, {
    key: "setEmail",
    value: function setEmail(email) {
      this.model.setEmail(email);
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this.model.setStatus(status);
    }
  }, {
    key: "sendNotification",
    value: function sendNotification() {
      // Simulate sending notifications
      var _this$model = this.model,
          mobileNumber = _this$model.mobileNumber,
          email = _this$model.email,
          status = _this$model.status;
      console.log("Sending notification to ".concat(mobileNumber, " and ").concat(email, " about the ").concat(status, " status."));
    }
  }]);

  return FlightController;
}();

var _default = FlightController;
exports["default"] = _default;