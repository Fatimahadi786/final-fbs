"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _flightC = require("../controllers/flightC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// flightRoute.js
var router = _express["default"].Router(); // Create a new flight


router.post('/', _flightC.createFlight); // Get all flights

router.get('/flights', _flightC.getAllFlights); // Get a specific flight by flight number

router.get('/flights/:flightNumber', _flightC.getFlightByNumber);
router.get('/flight/:date', _flightC.getFlightByDate); // Update a flight by flight number

router.put('/flights/:flightNumber', _flightC.updateFlight);
router.get('/flights/:id', _flightC.getFlightById); // Delete a flight by flight number

var _default = router;
exports["default"] = _default;