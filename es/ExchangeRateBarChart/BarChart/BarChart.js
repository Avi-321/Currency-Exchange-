import React from 'react';
import './BarChart.css';
import Bar from '../Bar/Bar.js';
function BarChart(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRateChart-display"
  }, props.stateObjects.map(function (bar) {
    return /*#__PURE__*/React.createElement(Bar, {
      key: bar.rate,
      bar: bar,
      calcBarWidth: props.calcBarWidth(bar.rate),
      barLength: props.stateObjects.length
    });
  }));
}
export default BarChart;