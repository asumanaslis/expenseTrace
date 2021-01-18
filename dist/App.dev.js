"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _WelcomeScreen = _interopRequireDefault(require("./src/screens/WelcomeScreen/WelcomeScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var navigator = (0, _reactNavigationStack.createStackNavigator)({
  Welcome: _WelcomeScreen["default"]
}, {
  initialRouteName: "Welcome",
  defaultNavigationOptions: {
    title: "App"
  }
});

var _default = (0, _reactNavigation.createAppContainer)(navigator);

exports["default"] = _default;