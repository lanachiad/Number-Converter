import React from 'react';

const NumberConversion = (props) => (
  <section className="conversion-section">
    <span>{props.conversionName}: {props.convertedNumber}</span>
  </section>
);

export default NumberConversion;