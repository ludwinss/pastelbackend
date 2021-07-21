"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var storage = _multer["default"].diskStorage({
  destination: _path["default"].join(__dirname, '../', 'public/uploads'),
  filename: function filename(req, file, cb) {
    var _context;

    var imgName = (0, _concat["default"])(_context = "".concat(file.fieldname, " - ")).call(_context, (0, _now["default"])());
    req.pathImg = '/uploads/' + imgName;
    cb(null, imgName);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
var _default = upload;
exports["default"] = _default;