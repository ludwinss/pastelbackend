"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _dotenv = _interopRequireDefault(require("dotenv"));

var envFound = _dotenv["default"].config();

if (envFound.error) {
  console.error('Unable to find config file', envFound.error);
}

function _default() {
  if (process.env.DEV == 'true') {
    return {
      db: {
        dialect: process.env.DB_DEV_DIALECT,
        host: process.env.DB_DEV_HOST,
        port: process.env.DB_DEV_PORT,
        database: process.env.DB_DEV_NAME,
        username: process.env.DB_DEV_USERNAME,
        password: process.env.DB_DEV_PASSWORD,
        define: {
          timestamps: false,
          freezeTableName: true
        }
      },
      jwtSecret: process.env.JWT_SECRET
    };
  }

  return {
    db: {
      dialect: process.env.DB_PRO_DIALECT,
      host: process.env.DB_PRO_HOST,
      port: process.env.DB_PRO_PORT,
      database: process.env.DB_PRO_NAME,
      username: process.env.DB_PRO_USERNAME,
      password: process.env.DB_PRO_PASSWORD,
      define: {
        timestamps: false,
        freezeTableName: true
      },
      "native": true,
      ssl: true
    },
    jwtSecret: process.env.JWT_SECRET
  };
}