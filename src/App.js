import React, { Component } from 'react';
import decimalToBinary from './decimalToBinary';
import decimalToOctal from './decimalToOctal';
import decimalToHexa from './decimalToHexa';
import NumberConversion from './numberConversion';
import './App.css';

class DecimalConverter extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyPress = (event) => {
    if(event.key === "Enter") {
      const decimal = this.refs["user-input"].value;
      const binary = decimalToBinary(decimal);
      const octal = decimalToOctal(decimal);
      const hexadecimal = decimalToHexa(decimal);
      const data = [
        {
          convertedNumber: binary,
          conversionName: "0b",
        },
        {
          convertedNumber: octal,
          conversionName: "O",
        },
        {
          convertedNumber: hexadecimal,
          conversionName: "0x",
        },
      ];
      this.setState({ data });


      // this.setState({ binary }) = decimalToBinary(decimal);
      // this.setState({ octal }) = decimalToOctal(decimal);
      // this.setState({ hexadecimal }) = decimalToHexa(decimal);
    }
  }

  render() {
    return (
      <div className="DecimalConverter">
        <div className="decimal-section">
          <label htmlFor="decimal">Translate: </label>
          <input onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref="user-input" type="text" />
        </div>
        <div className="conversion-section">
          {this.state.data.map((conversion, index) => (
            <NumberConversion 
              key={index}
              convertedNumber={conversion.convertedNumber}
              conversionName={conversion.conversionName}
            />
          ))}

          {/*<NumberConversion 
            convertedNumber={this.state.binary}
            conversionName="0b"
          />
          <NumberConversion 
            convertedNumber={this.state.octal}
            conversionName="O"
          />
          <NumberConversion 
            convertedNumber={this.state.hexadecimal}
            conversionName="0x"
          /> */}
        </div>
      </div>
    );
  }
}

export default DecimalConverter;