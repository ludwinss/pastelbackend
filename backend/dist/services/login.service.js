"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"));

var _models = _interopRequireDefault(require("../models"));

var _person = _interopRequireDefault(require("./person.service"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Administrator = _models["default"].Administrator,
    Employee = _models["default"].Employee;

var _idLogin = /*#__PURE__*/new _weakMap["default"]();

var LoginService = /*#__PURE__*/function (_PersonService) {
  (0, _inherits2["default"])(LoginService, _PersonService);

  var _super = _createSuper(LoginService);

  function LoginService(idLogin, idPerson, email, password, fullname, landline, cellphone, address, image, birthday) {
    var _this;

    (0, _classCallCheck2["default"])(this, LoginService);
    _this = _super.call(this, idPerson, email, password, fullname, landline, cellphone, address, image, birthday);

    _idLogin.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: void 0
    });

    (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _idLogin, idLogin);
    return _this;
  }

  (0, _createClass2["default"])(LoginService, [{
    key: "signup",
    value: function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var isEmployee,
            newUser,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isEmployee = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;
                _context.prev = 1;
                _context.next = 4;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(LoginService.prototype), "add", this).call(this);

              case 4:
                newUser = _context.sent;

                if (!newUser) {
                  _context.next = 12;
                  break;
                }

                if (!isEmployee) {
                  _context.next = 11;
                  break;
                }

                console.log(newUser);
                return _context.abrupt("return", Employee.create({
                  id_person: newUser.id_person
                }));

              case 11:
                return _context.abrupt("return", Administrator.create({
                  id_person: newUser.id_person
                }));

              case 12:
                return _context.abrupt("return", null);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);
                return _context.abrupt("return", null);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      function signup() {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }, {
    key: "signin",
    value: function () {
      var _signin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var foundPerson, isEmployee, isAdmin;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(LoginService.prototype), "listByEmail", this).call(this);

              case 3:
                foundPerson = _context2.sent;

                if (!foundPerson) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 7;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(LoginService.prototype), "comparePassword", this).call(this, foundPerson.password);

              case 7:
                if (!_context2.sent) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 10;
                return Employee.findOne({
                  where: {
                    id_person: foundPerson.id_person
                  }
                });

              case 10:
                isEmployee = _context2.sent;

                if (!isEmployee) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", {
                  foundPerson: foundPerson,
                  isEmployee: isEmployee
                });

              case 15:
                _context2.next = 17;
                return Administrator.findOne({
                  where: {
                    id_person: foundPerson.id_person
                  }
                });

              case 17:
                isAdmin = _context2.sent;
                return _context2.abrupt("return", {
                  foundPerson: foundPerson,
                  isAdmin: isAdmin
                });

              case 19:
                return _context2.abrupt("return", null);

              case 20:
                return _context2.abrupt("return", null);

              case 23:
                _context2.prev = 23;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                return _context2.abrupt("return", null);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 23]]);
      }));

      function signin() {
        return _signin.apply(this, arguments);
      }

      return signin;
    }()
  }]);
  return LoginService;
}(_person["default"]);

exports["default"] = LoginService;