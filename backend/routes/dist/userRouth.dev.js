"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userControllers = require("../controllers/userControllers.js");

var _verifyToken = require("../utils/verifyToken.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/checkauthentication", _verifyToken.verifyToken, function (req, res, next) {
  res.send("hello user, you are logged in");
});
router.get("/checkuser/:id", _verifyToken.verifyUser, function (req, res, next) {
  res.send("hello user, you are logged in and you can delete your account");
});
router.get("/checkadmin/:id", _verifyToken.verifyAdmin, function (req, res, next) {
  res.send("hello admin, you are logged in and you can delete all accounts");
}); //UPDATE

router.put("/:id", _verifyToken.verifyUser, _userControllers.updateUser); //DELETE

router["delete"]("/:id", _verifyToken.verifyUser, _userControllers.deleteUser); //GET

router.get("/:id", _verifyToken.verifyUser, _userControllers.getUser); //GET ALL

router.get("/", _verifyToken.verifyAdmin, _userControllers.getUsers);
var _default = router;
exports["default"] = _default;