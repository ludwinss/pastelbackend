"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _task = _interopRequireDefault(require("../services/task.service"));

var _mail = _interopRequireDefault(require("../services/mail.service"));

var _default = {
  listAll: function () {
    var _listAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var foundTask;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _task["default"].listAll();

            case 3:
              foundTask = _context.sent;

              if (foundTask) {
                res.status(200).send(foundTask);
              } else {
                res.status(402).send({
                  message: "Don\'t found"
                });
              }

              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function listAll(_x, _x2) {
      return _listAll.apply(this, arguments);
    }

    return listAll;
  }(),
  add: function () {
    var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body, idEmployee, name, priority, description, dateFinish, idAdministrator, Task, newTask, employee;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, idEmployee = _req$body.idEmployee, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, dateFinish = _req$body.dateFinish;
              idAdministrator = req.idAdministrator;
              Task = new _task["default"](idAdministrator, idEmployee, null, name, priority, description, dateFinish);
              _context2.next = 6;
              return Task.add();

            case 6:
              newTask = _context2.sent;

              if (!newTask) {
                _context2.next = 15;
                break;
              }

              _context2.next = 10;
              return Task.listByIdEmployee();

            case 10:
              employee = _context2.sent;
              (0, _mail["default"])(employee.email, "You received a new tasks in de Pastel company please check de Web Page");
              res.status(200).send({
                newTask: newTask
              });
              _context2.next = 16;
              break;

            case 15:
              res.status(400).send({
                message: 'Bad request'
              });

            case 16:
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 18]]);
    }));

    function add(_x3, _x4) {
      return _add.apply(this, arguments);
    }

    return add;
  }(),
  listAllMyTask: function () {
    var _listAllMyTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var foundMyTask;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _task["default"].listMyTasks(req.idEmployee);

            case 3:
              foundMyTask = _context3.sent;

              if (!foundMyTask) {
                res.status(402).send({
                  message: 'Dont Found'
                });
              }

              res.status(200).send(foundMyTask);
              _context3.next = 12;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    function listAllMyTask(_x5, _x6) {
      return _listAllMyTask.apply(this, arguments);
    }

    return listAllMyTask;
  }(),
  listAllEmployees: function () {
    var _listAllEmployees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var foundAllEmployees;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _task["default"].listAllEmployees();

            case 3:
              foundAllEmployees = _context4.sent;

              if (!foundAllEmployees) {
                res.status(402).send({
                  message: 'Dont Found'
                });
              }

              res.status(200).send(foundAllEmployees);
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    function listAllEmployees(_x7, _x8) {
      return _listAllEmployees.apply(this, arguments);
    }

    return listAllEmployees;
  }(),
  listProgressMyTask: function () {
    var _listProgressMyTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var foundMyTask;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _task["default"].listMyTasksInProgress(req.idEmployee);

            case 3:
              foundMyTask = _context5.sent;

              if (!foundMyTask) {
                res.status(402).send({
                  message: 'Dont Found'
                });
              }

              res.status(200).send(foundMyTask);
              _context5.next = 12;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));

    function listProgressMyTask(_x9, _x10) {
      return _listProgressMyTask.apply(this, arguments);
    }

    return listProgressMyTask;
  }(),
  updateStatusMyTask: function () {
    var _updateStatusMyTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var idTask, idEmployee, status, modStatus, response, employee;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              idTask = req.params.id;
              idEmployee = req.idEmployee;
              status = req.body.status;
              modStatus = new _task["default"](null, idEmployee, idTask, null, null, null, null, status);
              _context6.next = 7;
              return modStatus.changeStatus();

            case 7:
              response = _context6.sent;

              if (response) {
                _context6.next = 10;
                break;
              }

              return _context6.abrupt("return", res.status(400).send({
                message: 'Date Limit or Task finished'
              }));

            case 10:
              _context6.next = 12;
              return modStatus.listByIdEmployee();

            case 12:
              employee = _context6.sent;
              (0, _mail["default"])('opotunidades@smn.com.br', "The user ".concat(employee.email, " finish the task please contanct with him or check the Web Page"));
              res.status(200).send(response);
              _context6.next = 21;
              break;

            case 17:
              _context6.prev = 17;
              _context6.t0 = _context6["catch"](0);
              console.error(_context6.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 21:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 17]]);
    }));

    function updateStatusMyTask(_x11, _x12) {
      return _updateStatusMyTask.apply(this, arguments);
    }

    return updateStatusMyTask;
  }(),
  deleteTask: function () {
    var _deleteTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var isDelete;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _task["default"].deleteTask(req.params.id);

            case 3:
              isDelete = _context7.sent;

              if (isDelete) {
                _context7.next = 6;
                break;
              }

              return _context7.abrupt("return", res.status(402).send({
                message: 'Instance don\'t found'
              }));

            case 6:
              res.status(200).send({
                message: 'Done'
              });
              _context7.next = 13;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              console.error(_context7.t0);
              res.status(500).send({
                message: "Internal error"
              });

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 9]]);
    }));

    function deleteTask(_x13, _x14) {
      return _deleteTask.apply(this, arguments);
    }

    return deleteTask;
  }()
};
exports["default"] = _default;