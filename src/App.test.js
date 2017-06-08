import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DecimalConverter from './DecimalConverter';
import Conversion from './Conversion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
