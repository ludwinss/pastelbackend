"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = require("express");

var _jwt = _interopRequireDefault(require("../services/jwt.service"));

var _task = _interopRequireDefault(require("../controllers/task.controller"));

var router = (0, _express.Router)(); //Admin's route

router.get('/', _jwt["default"].isAdmin, _task["default"].listAll);
router.get('/employees', _jwt["default"].isAdmin, _task["default"].listAllEmployees);
router.post('/', _jwt["default"].isAdmin, _task["default"].add);
router["delete"]('/:id', _jwt["default"].isAdmin, _task["default"].deleteTask); //Employe's route

router.get('/mytasks/all', _jwt["default"].isEmployee, _task["default"].listAllMyTask);
router.get('/mytasks/progress', _jwt["default"].isEmployee, _task["default"].listProgressMyTask);
router.put('/mytasks/progress/:id', _jwt["default"].isEmployee, _task["default"].updateStatusMyTask);
var _default = router;
exports["default"] = _default;