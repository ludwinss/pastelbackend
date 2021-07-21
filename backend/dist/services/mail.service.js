"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _default(to, text) {
  console.log(to, text);

  var transporter = _nodemailer["default"].createTransport({
    service: 'gmail',
    auth: {
      user: 'ludwinss@gmail.com',
      pass: 'ubdmzbaiawyummdg'
    }
  });

  var mailOptions = {
    from: 'ludwinss@gmail.com',
    to: to,
    subject: 'Alert about a Tasks of Pastel Simulated',
    text: text
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}