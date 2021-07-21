"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _addTask = _interopRequireDefault(require("./addTask.model"));

var _administrator = _interopRequireDefault(require("./administrator.model"));

var _employee = _interopRequireDefault(require("./employee.model"));

var _make = _interopRequireDefault(require("./make.model"));

var _person = _interopRequireDefault(require("./person.model"));

var _task = _interopRequireDefault(require("./task.model"));

var _config = _interopRequireDefault(require("../globals/config"));

var models = {};

try {
  var _context;

  var sequelize = new _sequelize["default"]((0, _config["default"])().db);
  models['AddTask'] = (0, _addTask["default"])(sequelize, _sequelize["default"]);
  models['Administrator'] = (0, _administrator["default"])(sequelize, _sequelize["default"]);
  models['Employee'] = (0, _employee["default"])(sequelize, _sequelize["default"]);
  models['Make'] = (0, _make["default"])(sequelize, _sequelize["default"]);
  models['Person'] = (0, _person["default"])(sequelize, _sequelize["default"]);
  models['Task'] = (0, _task["default"])(sequelize, _sequelize["default"]);
  (0, _forEach["default"])(_context = (0, _values["default"])(models)).call(_context, function (values) {
    if (values.associate) {
      values.associate(models);
    }
  });
} catch (e) {
  console.error('Unable to connect to the Database', e);
}

var _default = models;
exports["default"] = _default;