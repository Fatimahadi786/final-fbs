"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _auth = _interopRequireDefault(require("./routes/auth.js"));

var _userRouth = _interopRequireDefault(require("./routes/userRouth.js"));

var _flightRoute = _interopRequireDefault(require("./routes/flightRoute.js"));

var _passengerRoute = _interopRequireDefault(require("./routes/passengerRoute.js"));

var _bookingRoute = _interopRequireDefault(require("./routes/bookingRoute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();

var connect = function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGODB_ATLAS));

        case 3:
          console.log("Connected to MongoDB.");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

_mongoose["default"].connection.on("disconnected", function () {
  console.log("MongoDB disconnected!");
}); // Middlewares


app.use((0, _cors["default"])({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:8800'],
  credentials: true
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"].json());
app.use("/api/auth", _auth["default"]);
app.use("/api/user", _userRouth["default"]);
app.use("/api/flights", _flightRoute["default"]);
app.use("/api/passenger", _passengerRoute["default"]);
app.use("/api/booking", _bookingRoute["default"]);
app.use(function (err, req, res, next) {
  console.log("Error:", err); // Log the error for debugging

  var errorStatus = err.status || 500;
  var errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          connect();
          console.log("Server listening on port ".concat(PORT));
          console.log("Express Server is started.");

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});