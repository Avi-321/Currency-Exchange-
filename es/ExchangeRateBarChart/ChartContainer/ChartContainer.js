import React from 'react';
import './ChartContainer.css';
function ChartContainer(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-margin-top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-title"
  }, /*#__PURE__*/React.createElement("h3", null, props.title ? props.title : 'Exchange Rates')), /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-margin"
  }), props.children, /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-margin"
  }));
}
export default ChartContainer;