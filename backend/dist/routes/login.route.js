"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = require("express");

var _login = _interopRequireDefault(require("../controllers/login.controller"));

var _multer = _interopRequireDefault(require("../services/multer.service"));

var router = (0, _express.Router)();
router.post('/signup', function (req, res, next) {
  console.log(req.body);
  next();
}, _multer["default"].single('image'), _login["default"].signup);
router.post('/signin', _login["default"].signin);
var _default = router;
exports["default"] = _default;