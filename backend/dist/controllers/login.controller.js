"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _jwt = _interopRequireDefault(require("../services/jwt.service"));

var _login = _interopRequireDefault(require("../services/login.service"));

var _default = {
  signup: function () {
    var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var _req$body, email, password, fullname, landline, cellphone, address, birthday, image, newLogin, addNewUser, login;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, email = _req$body.email, password = _req$body.password, fullname = _req$body.fullname, landline = _req$body.landline, cellphone = _req$body.cellphone, address = _req$body.address, birthday = _req$body.birthday;
              image = req.pathImg;
              newLogin = new _login["default"](null, null, email, password, fullname, landline, cellphone, address, image, birthday);
              _context.next = 6;
              return newLogin.signup();

            case 6:
              addNewUser = _context.sent;

              if (!addNewUser) {
                _context.next = 14;
                break;
              }

              _context.next = 10;
              return newLogin.listByEmail();

            case 10:
              login = _context.sent;

              if (addNewUser.id_employee) {
                res.status(200).send({
                  message: 'Welcome ' + login.fullname,
                  rol: 'employee',
                  token: _jwt["default"].sign({
                    email: login.email,
                    fullname: login.fullname,
                    rol: 'employee',
                    idRol: addNewUser.id_employee,
                    landline: login.landline,
                    cellphone: login.cellphone,
                    address: login.address,
                    image: login.image,
                    birthday: login.birdthday
                  })
                });
              } else {
                res.status(200).send({
                  message: 'Welcome ' + login.fullname,
                  rol: 'administrator',
                  token: _jwt["default"].sign({
                    email: login.email,
                    rol: 'administrator',
                    idRol: addNewUser.id_administrator,
                    fullname: login.fullname,
                    image: login.image
                  })
                });
              }

              _context.next = 15;
              break;

            case 14:
              res.status(400).send({
                message: 'Wrong data or Email Duplicate',
                auth: false
              });

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.status(500).send({
                message: 'Internal error'
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    function signup(_x, _x2, _x3) {
      return _signup.apply(this, arguments);
    }

    return signup;
  }(),
  signin: function () {
    var _signin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body2, email, password, newLogin, foundUser, foundPerson, isEmployee;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              newLogin = new _login["default"](null, null, email, password);
              _context2.next = 5;
              return newLogin.signin();

            case 5:
              foundUser = _context2.sent;

              if (foundUser) {
                foundPerson = foundUser.foundPerson, isEmployee = foundUser.isEmployee;

                if (isEmployee) {
                  res.status(200).send({
                    message: 'Welcome ' + foundPerson.fullname,
                    rol: 'employee',
                    token: _jwt["default"].sign({
                      email: foundPerson.email,
                      rol: 'employee',
                      idRol: isEmployee.id_employee,
                      fullname: foundPerson.fullname,
                      landline: foundPerson.landline,
                      cellphone: foundPerson.cellphone,
                      address: foundPerson.address,
                      image: foundPerson.image,
                      birthday: foundPerson.birdthday
                    })
                  });
                } else {
                  res.status(200).send({
                    message: 'Welcome ' + foundPerson.fullname,
                    rol: 'administrator',
                    token: _jwt["default"].sign({
                      email: foundPerson.email,
                      rol: 'administrator',
                      idRol: foundUser.isAdmin.id_administrator,
                      fullname: foundPerson.fullname,
                      image: foundPerson.image
                    })
                  });
                }
              } else {
                res.status(400).send({
                  message: "Wrong Email or Password",
                  auth: false
                });
              }

              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              res.status(500).send({
                message: 'Internal error'
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    function signin(_x4, _x5) {
      return _signin.apply(this, arguments);
    }

    return signin;
  }()
};
exports["default"] = _default;