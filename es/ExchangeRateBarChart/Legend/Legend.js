import React from 'react';
import './Legend.css';
import StartMonth from '../StartMonth/StartMonth.js';
function Legend(props) {
  var _React$createElement;
  var currencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'HKD'];
  if (props.currencyList) {
    currencies = props.currencyList;
  }
  ;
  return /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-legend"
  }, /*#__PURE__*/React.createElement(StartMonth, (_React$createElement = {
    startMonth: props.startMonth,
    onChange: props.onChange,
    startYear: props.startYear
  }, _React$createElement["onChange"] = props.onChange, _React$createElement.onSetStartYear = props.onSetStartYear, _React$createElement)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "numOfMonths"
  }, "Number of months (up to 12): "), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "numOfMonths",
    min: "1",
    max: "12",
    value: props.numMonths,
    onChange: props.onSetNumMonths
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "currency_select"
  }, "Currency: "), /*#__PURE__*/React.createElement("select", {
    id: "currency_select",
    value: props.exchangeCurrency,
    onChange: props.onSetExchangeCurrency
  }, currencies.map(function (currency) {
    return /*#__PURE__*/React.createElement("option", {
      key: currency
    }, currency);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "base_currency_select"
  }, "Base Currency: "), /*#__PURE__*/React.createElement("select", {
    id: "base_currency_select",
    value: props.baseCurrency,
    onChange: props.onSetBaseCurrency
  }, currencies.map(function (currency) {
    return /*#__PURE__*/React.createElement("option", {
      key: currency
    }, currency);
  }))));
}
export default Legend;