import React from 'react';
import './StartMonth.css';
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "start_month"
  }, "Start Month:"), /*#__PURE__*/React.createElement("select", {
    id: "start_month",
    value: props.startMonth,
    onChange: props.onChange
  }, dropdownStartMonths.map(function (month) {
    return /*#__PURE__*/React.createElement("option", {
      key: month.value,
      value: month.value
    }, month.text);
  })), /*#__PURE__*/React.createElement("select", {
    id: "start_year",
    value: props.startYear,
    onChange: props.onSetStartYear
  }, dropdownYears.map(function (year) {
    return /*#__PURE__*/React.createElement("option", {
      key: year
    }, year);
  })));
}
export default StartMonth;