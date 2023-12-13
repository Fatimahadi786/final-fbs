"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bookingC = require("../controllers/bookingC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // Route to create a new flight booking


router.post("/bookings", _bookingC.createBooking); // Route to get all flight bookings

router.get("/bookings", _bookingC.getAllBookings); // Route to get a specific flight booking by ID

router.get("/bookings/:bookingId", _bookingC.getBookingById); // Route to update a specific flight booking by ID

router.put("/bookings/:bookingId", _bookingC.updateBooking); // Route to delete a specific flight booking by ID

router["delete"]("/bookings/:bookingId", _bookingC.deleteBooking);
var _default = router;
exports["default"] = _default;