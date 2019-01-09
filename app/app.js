import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Comment from './components/comment';
import Input from './components/inputBar';
import MoreCommentsButton from './components/moreComments';

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      commentsList: [],
      newComment: '',
      project_id: this.props.id,
      more:false
    }
  }


  componentDidMount () {
    // get comments from with project id
    // set state with given comments
  }

  render () {
    return (
      <div>
        <h1>{'Jump Start Comment Section'}</h1>
        <Comment text={'this is a comment :)'} special={{color:'red',fontSize:'20px'}}/>
        <Input func={(text) => console.log('this is the text ->',text)} btnText={'enter'} placeholder={'jot something down...'}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));