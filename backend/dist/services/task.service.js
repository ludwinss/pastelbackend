"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"));

var _models = _interopRequireDefault(require("../models/"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var Task = _models["default"].Task,
    AddTask = _models["default"].AddTask,
    Administrator = _models["default"].Administrator,
    Make = _models["default"].Make,
    Employee = _models["default"].Employee,
    Person = _models["default"].Person;

var _idAdministrator = /*#__PURE__*/new _weakMap["default"]();

var _idEmployee = /*#__PURE__*/new _weakMap["default"]();

var _idTask = /*#__PURE__*/new _weakMap["default"]();

var _name = /*#__PURE__*/new _weakMap["default"]();

var _priority = /*#__PURE__*/new _weakMap["default"]();

var _description = /*#__PURE__*/new _weakMap["default"]();

var _dateFinish = /*#__PURE__*/new _weakMap["default"]();

var _status = /*#__PURE__*/new _weakMap["default"]();

var TaskService = /*#__PURE__*/function () {
  function TaskService(idAdministrator, idEmployee, idTask, name) {
    var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'medium';
    var description = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'Don\'t have description, Good Luck :)';
    var dateFinish = arguments.length > 6 ? arguments[6] : undefined;
    var status = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'progress';
    (0, _classCallCheck2["default"])(this, TaskService);

    _idAdministrator.set(this, {
      writable: true,
      value: void 0
    });

    _idEmployee.set(this, {
      writable: true,
      value: void 0
    });

    _idTask.set(this, {
      writable: true,
      value: void 0
    });

    _name.set(this, {
      writable: true,
      value: void 0
    });

    _priority.set(this, {
      writable: true,
      value: void 0
    });

    _description.set(this, {
      writable: true,
      value: void 0
    });

    _dateFinish.set(this, {
      writable: true,
      value: void 0
    });

    _status.set(this, {
      writable: true,
      value: void 0
    });

    (0, _classPrivateFieldSet2["default"])(this, _idAdministrator, idAdministrator);
    (0, _classPrivateFieldSet2["default"])(this, _idEmployee, idEmployee);
    (0, _classPrivateFieldSet2["default"])(this, _idTask, idTask);
    (0, _classPrivateFieldSet2["default"])(this, _name, name);
    (0, _classPrivateFieldSet2["default"])(this, _priority, priority);
    (0, _classPrivateFieldSet2["default"])(this, _description, description);
    (0, _classPrivateFieldSet2["default"])(this, _dateFinish, dateFinish);
    (0, _classPrivateFieldSet2["default"])(this, _status, status);
  }

  (0, _createClass2["default"])(TaskService, [{
    key: "listByIdEmployee",
    value: function () {
      var _listByIdEmployee = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var foundEmployee;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Employee.findByPk((0, _classPrivateFieldGet2["default"])(this, _idEmployee));

              case 2:
                foundEmployee = _context.sent;
                _context.next = 5;
                return Person.findByPk(foundEmployee.id_person);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listByIdEmployee() {
        return _listByIdEmployee.apply(this, arguments);
      }

      return listByIdEmployee;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var newTask;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Task.create({
                  name: (0, _classPrivateFieldGet2["default"])(this, _name),
                  priority: (0, _classPrivateFieldGet2["default"])(this, _priority),
                  description: (0, _classPrivateFieldGet2["default"])(this, _description)
                });

              case 3:
                newTask = _context2.sent;

                if (!newTask) {
                  _context2.next = 11;
                  break;
                }

                (0, _classPrivateFieldSet2["default"])(this, _idTask, newTask.id_task);
                _context2.next = 8;
                return _promise["default"].all([AddTask.create({
                  id_administrator: (0, _classPrivateFieldGet2["default"])(this, _idAdministrator),
                  id_task: (0, _classPrivateFieldGet2["default"])(this, _idTask),
                  date: (0, _now["default"])()
                }), Make.create({
                  id_employee: (0, _classPrivateFieldGet2["default"])(this, _idEmployee),
                  id_task: (0, _classPrivateFieldGet2["default"])(this, _idTask),
                  date_start: (0, _now["default"])(),
                  date_finish: (0, _classPrivateFieldGet2["default"])(this, _dateFinish),
                  status: (0, _classPrivateFieldGet2["default"])(this, _status)
                })]);

              case 8:
                return _context2.abrupt("return", newTask);

              case 11:
                return _context2.abrupt("return", null);

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                return _context2.abrupt("return", null);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));

      function add() {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "changeStatus",
    value: function () {
      var _changeStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var foundTask, diffDate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                console.log((0, _classPrivateFieldGet2["default"])(this, _status), (0, _classPrivateFieldGet2["default"])(this, _idTask), (0, _classPrivateFieldGet2["default"])(this, _idEmployee));
                _context3.next = 4;
                return Make.findOne({
                  where: {
                    id_employee: (0, _classPrivateFieldGet2["default"])(this, _idEmployee),
                    id_task: (0, _classPrivateFieldGet2["default"])(this, _idTask)
                  }
                });

              case 4:
                foundTask = _context3.sent;

                if (!(foundTask.status !== 'terminated')) {
                  _context3.next = 11;
                  break;
                }

                diffDate = Math.abs(new Date(foundTask.date_finish) - (0, _now["default"])());
                diffDate = Math.ceil(diffDate / (1000 * 60 * 60 * 24));

                if (diffDate < 0) {
                  foundTask.status = 'terminated';
                } else {
                  foundTask.status = (0, _classPrivateFieldGet2["default"])(this, _status);
                }

                foundTask.save();
                return _context3.abrupt("return", foundTask);

              case 11:
                return _context3.abrupt("return", false);

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);
                return _context3.abrupt("return", null);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14]]);
      }));

      function changeStatus() {
        return _changeStatus.apply(this, arguments);
      }

      return changeStatus;
    }()
  }], [{
    key: "listAll",
    value: function listAll() {
      return Task.findAll({
        include: Employee
      });
    }
  }, {
    key: "listMyTasks",
    value: function listMyTasks(id) {
      return Employee.findAll({
        where: {
          id_employee: id
        },
        include: Task
      });
    }
  }, {
    key: "listAllEmployees",
    value: function listAllEmployees() {
      return Person.findAll({
        include: {
          model: Employee,
          required: true
        }
      });
    }
  }, {
    key: "listMyTasksInProgress",
    value: function listMyTasksInProgress(id) {
      return Employee.findAll({
        where: {
          id_employee: id
        },
        include: [{
          model: Task,
          through: {
            where: {
              status: 'progress'
            }
          }
        }]
      });
    }
  }, {
    key: "deleteTask",
    value: function () {
      var _deleteTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(pk) {
        var foundTask, idAdministrator, idEmployee;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Task.findByPk(pk, {
                  include: [Employee, Administrator]
                });

              case 3:
                foundTask = _context4.sent;

                if (foundTask) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", null);

              case 6:
                idAdministrator = foundTask.administrators[0].id_administrator;
                idEmployee = foundTask.employees[0].id_employee;
                foundTask.removeAdministrator(idAdministrator);
                foundTask.removeEmployee(idEmployee);
                _context4.next = 12;
                return foundTask.destroy();

              case 12:
                return _context4.abrupt("return", _context4.sent);

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);
                return _context4.abrupt("return", null);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 15]]);
      }));

      function deleteTask(_x) {
        return _deleteTask.apply(this, arguments);
      }

      return deleteTask;
    }()
  }]);
  return TaskService;
}();

exports["default"] = TaskService;