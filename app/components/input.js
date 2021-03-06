import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor (props) {
    super(props);
    this.state= {
      text: '',
      clear: true
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.runFunc = this.runFunc.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChangeInput (event) { // as the user types, update state
    this.setState({text:event.target.value});
  }

  handleKeyDown (event) { // if 'Enter' is pressed run the function
    if(event.key === 'Enter') { this.runFunc(this.state.text); }
  }

  runFunc (value) { // invokes the given function with text from state
    this.props.func(value);
    this.clearInput();
  }

  clearInput () { // clears input if not overwritten
    if(this.state.clear) {
      this.refs.input.value = '';
      this.setState({text:''});
    }
  }

  componentDidMount () { // checks for options that need to be overwritten
    if(this.props.clear === false) this.setState({clear:false});
  }

  render () {
    return (
      <div style={this.props.specialDiv}>
        <input
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyDown}
          style={this.props.special}
          placeholder={this.props.placeholder}
          ref={'input'}>
        </input>
        <button
          onClick={_=>this.runFunc(this.state.text)}
          style={this.props.specialBtn}
        >{this.props.btnText}
        </button>
      </div>
    )
  }
}

Input.propTypes = {
  func: PropTypes.func.isRequired, // what to invoke on 'Enter'
  placeholder: PropTypes.string, // placeholder text for input field
  btnText: PropTypes.string, // text to display on button
  special: PropTypes.object, // special css object
  specialBtn: PropTypes.object, // special css object for button
  specialDiv: PropTypes.object, // special css object for div
  clear: PropTypes.bool // bool to clear input on 'Enter' or not
}

export default Input;