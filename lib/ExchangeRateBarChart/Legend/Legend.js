"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Legend.css");
var _StartMonth = _interopRequireDefault(require("../StartMonth/StartMonth.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Legend(props) {
  var _React$createElement;
  var currencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'HKD'];
  if (props.currencyList) {
    currencies = props.currencyList;
  }
  ;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ExchangeRateChart-legend"
  }, /*#__PURE__*/_react.default.createElement(_StartMonth.default, (_React$createElement = {
    startMonth: props.startMonth,
    onChange: props.onChange,
    startYear: props.startYear
  }, _React$createElement["onChange"] = props.onChange, _React$createElement.onSetStartYear = props.onSetStartYear, _React$createElement)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    for: "numOfMonths"
  }, "Number of months (up to 12): "), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    id: "numOfMonths",
    min: "1",
    max: "12",
    value: props.numMonths,
    onChange: props.onSetNumMonths
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    for: "currency_select"
  }, "Currency: "), /*#__PURE__*/_react.default.createElement("select", {
    id: "currency_select",
    value: props.exchangeCurrency,
    onChange: props.onSetExchangeCurrency
  }, currencies.map(function (currency) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: currency
    }, currency);
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    for: "base_currency_select"
  }, "Base Currency: "), /*#__PURE__*/_react.default.createElement("select", {
    id: "base_currency_select",
    value: props.baseCurrency,
    onChange: props.onSetBaseCurrency
  }, currencies.map(function (currency) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: currency
    }, currency);
  }))));
}
var _default = Legend;
exports.default = _default;
module.exports = exports.default;