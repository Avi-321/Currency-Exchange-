import React from 'react';
import './Bar.css';
function Bar(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-bar",
    key: props.bar.rate,
    style: {
      width: props.calcBarWidth + '%',
      height: 95 / props.barLength + '%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-bar-text"
  }, /*#__PURE__*/React.createElement("p", null, props.bar.date, ": ", /*#__PURE__*/React.createElement("strong", null, props.bar.rate), " ", props.bar.currency)));
}
export default Bar;