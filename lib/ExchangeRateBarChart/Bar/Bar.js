"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Bar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Bar(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-bar",
    key: props.bar.rate,
    style: {
      width: props.calcBarWidth + '%',
      height: 95 / props.barLength + '%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-bar-text"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.bar.date, ": ", /*#__PURE__*/_react.default.createElement("strong", null, props.bar.rate), " ", props.bar.currency)));
}
var _default = Bar;
exports.default = _default;
module.exports = exports.default;