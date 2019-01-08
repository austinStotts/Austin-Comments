import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>{'Jump Start Comment Section'}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));