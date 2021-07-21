"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app.js"));

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Listen to port', _app["default"].get('port'));
});