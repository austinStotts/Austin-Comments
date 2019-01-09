import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Comment extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div 
        className={'comment-div'}
        style={this.props.specialDiv}>
        <p
          className={'comment-main'}
          style={this.props.special}>
          {this.props.text}
        </p>
      </div>
    )
  }
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  special: PropTypes.object,
  specialDiv: PropTypes.object
}

export default Comment;