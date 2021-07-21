"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"));

var _models = _interopRequireDefault(require("../models"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var Person = _models["default"].Person;

var _idPerson = /*#__PURE__*/new _weakMap["default"]();

var _fullname = /*#__PURE__*/new _weakMap["default"]();

var _landline = /*#__PURE__*/new _weakMap["default"]();

var _cellphone = /*#__PURE__*/new _weakMap["default"]();

var _address = /*#__PURE__*/new _weakMap["default"]();

var _email = /*#__PURE__*/new _weakMap["default"]();

var _password = /*#__PURE__*/new _weakMap["default"]();

var _image = /*#__PURE__*/new _weakMap["default"]();

var _birthday = /*#__PURE__*/new _weakMap["default"]();

var PersonService = /*#__PURE__*/function () {
  function PersonService(idPerson, email, password, fullname, landline, cellphone, address, image, birthday) {
    (0, _classCallCheck2["default"])(this, PersonService);

    _idPerson.set(this, {
      writable: true,
      value: void 0
    });

    _fullname.set(this, {
      writable: true,
      value: void 0
    });

    _landline.set(this, {
      writable: true,
      value: void 0
    });

    _cellphone.set(this, {
      writable: true,
      value: void 0
    });

    _address.set(this, {
      writable: true,
      value: void 0
    });

    _email.set(this, {
      writable: true,
      value: void 0
    });

    _password.set(this, {
      writable: true,
      value: void 0
    });

    _image.set(this, {
      writable: true,
      value: void 0
    });

    _birthday.set(this, {
      writable: true,
      value: void 0
    });

    (0, _classPrivateFieldSet2["default"])(this, _idPerson, idPerson);
    (0, _classPrivateFieldSet2["default"])(this, _fullname, fullname);
    (0, _classPrivateFieldSet2["default"])(this, _landline, landline);
    (0, _classPrivateFieldSet2["default"])(this, _cellphone, cellphone);
    (0, _classPrivateFieldSet2["default"])(this, _address, address);
    (0, _classPrivateFieldSet2["default"])(this, _email, email);
    (0, _classPrivateFieldSet2["default"])(this, _password, password);
    (0, _classPrivateFieldSet2["default"])(this, _image, image);
    (0, _classPrivateFieldSet2["default"])(this, _birthday, birthday);
  }

  (0, _createClass2["default"])(PersonService, [{
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var foundPerson, salt;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Person.findOne({
                  where: {
                    email: (0, _classPrivateFieldGet2["default"])(this, _email)
                  }
                });

              case 3:
                foundPerson = _context.sent;

                if (foundPerson) {
                  _context.next = 16;
                  break;
                }

                _context.next = 7;
                return _bcryptjs["default"].genSalt(10);

              case 7:
                salt = _context.sent;
                _context.t0 = _classPrivateFieldSet2["default"];
                _context.t1 = this;
                _context.t2 = _password;
                _context.next = 13;
                return _bcryptjs["default"].hash((0, _classPrivateFieldGet2["default"])(this, _password), salt);

              case 13:
                _context.t3 = _context.sent;
                (0, _context.t0)(_context.t1, _context.t2, _context.t3);
                return _context.abrupt("return", Person.create({
                  fullname: (0, _classPrivateFieldGet2["default"])(this, _fullname),
                  email: (0, _classPrivateFieldGet2["default"])(this, _email),
                  landline: (0, _classPrivateFieldGet2["default"])(this, _landline),
                  cellphone: (0, _classPrivateFieldGet2["default"])(this, _cellphone),
                  address: (0, _classPrivateFieldGet2["default"])(this, _address),
                  password: (0, _classPrivateFieldGet2["default"])(this, _password),
                  image: (0, _classPrivateFieldGet2["default"])(this, _image),
                  birthday: (0, _classPrivateFieldGet2["default"])(this, _birthday)
                }));

              case 16:
                return _context.abrupt("return", null);

              case 19:
                _context.prev = 19;
                _context.t4 = _context["catch"](0);
                console.error(_context.t4);
                return _context.abrupt("return", null);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
      }));

      function add() {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "listByEmail",
    value: function listByEmail() {
      return Person.findOne({
        where: {
          email: (0, _classPrivateFieldGet2["default"])(this, _email)
        }
      });
    }
  }, {
    key: "comparePassword",
    value: function comparePassword(pwd) {
      return _bcryptjs["default"].compare((0, _classPrivateFieldGet2["default"])(this, _password), pwd);
    }
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var foundPerson;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Person.findByPk((0, _classPrivateFieldGet2["default"])(this, _idPerson));

              case 3:
                foundPerson = _context2.sent;
                _context2.next = 6;
                return foundPerson.destroy();

              case 6:
                return _context2.abrupt("return", true);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                return _context2.abrupt("return", null);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }], [{
    key: "listAll",
    value: function listAll() {
      return Person.findAll();
    }
  }]);
  return PersonService;
}();

exports["default"] = PersonService;