import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import pages from './pages';
// import CreateHair from '../components/newHair';
// import CreateComment from '../components/newComment';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path={this.props.match.url} component={ Pages }  />
      </div>
    )
  }
}