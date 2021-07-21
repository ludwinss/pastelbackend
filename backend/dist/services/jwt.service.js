"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _default = {
  sign: function sign(payload) {
    try {
      return _jsonwebtoken["default"].sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256'
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: 'Internal error',
        auth: false
      });
    }
  },
  verify: function verify(req, res, next) {
    try {
      var token = req.headers['x-access-token'];

      if (token) {
        var isToken = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

        if (!isToken) {
          return res.status(401).send({
            message: 'Invalid Token,Try Again',
            auth: false
          });
        }

        return next();
      }

      return res.status(401).send({
        message: 'Don\'t provider any Token,Try Again',
        auth: false
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Invalid Token',
        auth: false
      });
    }
  },
  isAdmin: function isAdmin(req, res, next) {
    try {
      var token = req.headers['x-access-token'];

      if (token) {
        var person = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

        if (person.rol === 'administrator') {
          req.idAdministrator = person.idRol;
          return next();
        } else {
          return res.status(401).send({
            message: 'Unauthorized'
          });
        }
      } else {
        res.status(401).send({
          message: 'Not provide any Token',
          auth: false
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Invalid Token',
        auth: false
      });
    }
  },
  isEmployee: function isEmployee(req, res, next) {
    try {
      var token = req.headers['x-access-token'];

      if (token) {
        var person = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

        if (person.rol == 'employee') {
          req.idEmployee = person.idRol;
          return next();
        } else {
          return res.status(401).send({
            message: 'Unauthorized'
          });
        }
      } else {
        res.status(401).send({
          message: 'Not provide any Token',
          auth: false
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Invalid Token',
        auth: false
      });
    }
  }
};
exports["default"] = _default;