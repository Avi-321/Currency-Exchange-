"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./BarChart.css");
var _Bar = _interopRequireDefault(require("../Bar/Bar.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BarChart(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-display"
  }, props.stateObjects.map(function (bar) {
    return /*#__PURE__*/_react.default.createElement(_Bar.default, {
      key: bar.rate,
      bar: bar,
      calcBarWidth: props.calcBarWidth(bar.rate),
      barLength: props.stateObjects.length
    });
  }));
}
var _default = BarChart;
exports.default = _default;
module.exports = exports.default;