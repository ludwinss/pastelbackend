"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _default(sequelize, Sequelize) {
  var Administrator = /*#__PURE__*/function (_Sequelize$Model) {
    (0, _inherits2["default"])(Administrator, _Sequelize$Model);

    var _super = _createSuper(Administrator);

    function Administrator() {
      (0, _classCallCheck2["default"])(this, Administrator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Administrator, null, [{
      key: "associate",
      value: function associate(Models) {
        Administrator.belongsTo(Models.Person, {
          foreignKey: 'id_person'
        });
        Administrator.belongsToMany(Models.Task, {
          through: {
            model: Models.AddTask
          },
          foreignKey: 'id_administrator',
          onDelete: 'CASCADE'
        });
      }
    }]);
    return Administrator;
  }(Sequelize.Model);

  Administrator.init({
    id_administrator: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    id_person: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    modelName: 'administrator',
    sequelize: sequelize
  });
  return Administrator;
}