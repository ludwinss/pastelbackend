"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _default(sequelize, Sequelize) {
  var Make = /*#__PURE__*/function (_Sequelize$Model) {
    (0, _inherits2["default"])(Make, _Sequelize$Model);

    var _super = _createSuper(Make);

    function Make() {
      (0, _classCallCheck2["default"])(this, Make);
      return _super.apply(this, arguments);
    }

    return Make;
  }(Sequelize.Model);

  Make.init({
    id_task: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_employee: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_start: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false
    },
    date_finish: Sequelize.DataTypes.DATE,
    status: {
      type: Sequelize.DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    modelName: 'make',
    sequelize: sequelize
  });
  return Make;
}