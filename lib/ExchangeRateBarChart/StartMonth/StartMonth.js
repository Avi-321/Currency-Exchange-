"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./StartMonth.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function StartMonth(props) {
  var dropdownYears = [2020, 2019, 2018, 2017, 2016];
  var dropdownStartMonths = [{
    value: '00',
    text: 'Jan'
  }, {
    value: '01',
    text: 'Feb'
  }, {
    value: '02',
    text: 'Mar'
  }, {
    value: '03',
    text: 'Apr'
  }, {
    value: '04',
    text: 'May'
  }, {
    value: '05',
    text: 'Jun'
  }, {
    value: '06',
    text: 'Jul'
  }, {
    value: '07',
    text: 'Aug'
  }, {
    value: '08',
    text: 'Sep'
  }, {
    value: '09',
    text: 'Oct'
  }, {
    value: '10',
    text: 'Nov'
  }, {
    value: '11',
    text: 'Dec'
  }];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    for: "start_month"
  }, "Start Month:"), /*#__PURE__*/_react.default.createElement("select", {
    id: "start_month",
    value: props.startMonth,
    onChange: props.onChange
  }, dropdownStartMonths.map(function (month) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: month.value,
      value: month.value
    }, month.text);
  })), /*#__PURE__*/_react.default.createElement("select", {
    id: "start_year",
    value: props.startYear,
    onChange: props.onSetStartYear
  }, dropdownYears.map(function (year) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: year
    }, year);
  })));
}
var _default = StartMonth;
exports.default = _default;
module.exports = exports.default;