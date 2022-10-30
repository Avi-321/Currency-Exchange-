function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
import React, { useState, useEffect } from 'react';
import Legend from '../Legend/Legend.js';
import BarChart from '../BarChart/BarChart.js';
import ChartContainer from '../ChartContainer/ChartContainer.js';
import './ExchangeRateBarChart.css';
function ExchangeRateBarChart(props) {
  var _useState = useState([]),
    stateObjects = _useState[0],
    setStateObjects = _useState[1];
  var _useState2 = useState('4'),
    numMonths = _useState2[0],
    setNumMonths = _useState2[1];
  var _useState3 = useState('01'),
    startMonth = _useState3[0],
    setStartMonth = _useState3[1];
  var _useState4 = useState('2019'),
    startYear = _useState4[0],
    setStartYear = _useState4[1];
  var _useState5 = useState('GBP'),
    exchangeCurrency = _useState5[0],
    setExchangeCurrency = _useState5[1];
  var _useState6 = useState('EUR'),
    baseCurrency = _useState6[0],
    setBaseCurrency = _useState6[1];
  useEffect(doFetch, [startMonth, startYear, numMonths, exchangeCurrency, baseCurrency]);
  function calculateDateArray() {
    var startDate = new Date(startYear, startMonth, 1);
    var dateArray = [];
    for (var i = 0; i < numMonths; i++) {
      dateArray.push(new Date(startDate));
      startDate.setMonth(startDate.getMonth() + 1);
    }
    var dateArrayFormatted = [];
    for (var _i = 0, _dateArray = dateArray; _i < _dateArray.length; _i++) {
      var date = _dateArray[_i];
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      if (month < 10) {
        month = '0' + month.toString();
      }
      if (day < 10) {
        day = '0' + day.toString();
      }
      dateArrayFormatted.push(year + '-' + month + '-' + day);
    }
    ;
    return dateArrayFormatted;
  }
  ;
  function getFetches() {
    var fetchRequests = [];
    var dates = calculateDateArray();
    for (var _iterator = _createForOfIteratorHelperLoose(dates), _step; !(_step = _iterator()).done;) {
      var date = _step.value;
      var url = 'https://api.exchangerate.host/' + date + '?symbols=' + exchangeCurrency + '&base=' + baseCurrency;
      var fetchRequest = fetch(url);
      fetchRequests.push(fetchRequest);
    }
    ;
    return Promise.all(fetchRequests);
  }
  ;
  function dataToStateObjects(responses) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(responses), _step2; !(_step2 = _iterator2()).done;) {
      var response = _step2.value;
      response.then(function (data) {
        var barData = {
          'date': data.date,
          'currency': exchangeCurrency,
          'rate': data.rates[exchangeCurrency]
        };
        setStateObjects(function (stateObjects) {
          return [].concat(stateObjects, [barData]);
        });
      });
    }
  }
  ;
  function doFetch() {
    setStateObjects([]);
    getFetches().then(function (responses) {
      return responses.map(function (response) {
        return response.json();
      });
    }).then(function (responses) {
      dataToStateObjects(responses);
    });
  }
  ;
  function calcBarWidth(currentRate) {
    var rateArray = [];
    for (var _iterator3 = _createForOfIteratorHelperLoose(stateObjects), _step3; !(_step3 = _iterator3()).done;) {
      var item = _step3.value;
      rateArray.push(item.rate);
    }
    ;
    var maxRate = Math.max.apply(Math, rateArray);
    var minrate = Math.min.apply(Math, rateArray);
    var minPercent = 20;
    return (100 - minPercent) / (maxRate - minrate) * (currentRate - maxRate) + 100;
  }
  ;
  return /*#__PURE__*/React.createElement("div", {
    className: "ExchangeRate"
  }, /*#__PURE__*/React.createElement(ChartContainer, {
    title: props.title
  }, /*#__PURE__*/React.createElement(Legend, {
    currencyList: props.currencyList,
    startMonth: startMonth,
    onChange: function onChange(ev) {
      return setStartMonth(ev.target.value);
    },
    startYear: startYear,
    onSetStartYear: function onSetStartYear(ev) {
      return setStartYear(ev.target.value);
    },
    numMonths: numMonths,
    onSetNumMonths: function onSetNumMonths(ev) {
      return setNumMonths(ev.target.value);
    },
    exchangeCurrency: exchangeCurrency,
    baseCurrency: baseCurrency,
    onSetExchangeCurrency: function onSetExchangeCurrency(ev) {
      return setExchangeCurrency(ev.target.value);
    },
    onSetBaseCurrency: function onSetBaseCurrency(ev) {
      return setBaseCurrency(ev.target.value);
    }
  }), /*#__PURE__*/React.createElement(BarChart, {
    stateObjects: stateObjects,
    calcBarWidth: calcBarWidth
  })));
}
export default ExchangeRateBarChart;