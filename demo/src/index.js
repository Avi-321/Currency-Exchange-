import React, { useState } from 'react'
import {render} from 'react-dom'
import App2 from './new/App2.js';
import './index.css'
//TODO: SOME KIND OF LOGO 
//import logo from './logo.svg';

import {ExchangeRateBarChart} from '../../src';

function App() {
  let check="1";
  if(check==="0")
  return (
    <App2/>
  )
  else
    return (
    //Note that two optional props are in use
    <div  className='titlebar'>
      <h1><strong>Exchange Rate Project</strong></h1>
      <ExchangeRateBarChart
      title='Exchange Rate'
      currencyList={['USD', 'EUR', 'JPY', 'GBP', 'HKD',]}/>
    </div>
    
      )
  };
  
render(<App/>, document.querySelector('#demo'))
