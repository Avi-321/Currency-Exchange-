"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ChartContainer.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ChartContainer(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-margin-top"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, props.title ? props.title : 'Exchange Rates')), /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-margin"
  }), props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-margin"
  }));
}
var _default = ChartContainer;
exports.default = _default;
module.exports = exports.default;