import React, { Component } from 'react';
// import { connectToStore } from  '../lib/util';
import Routes from './routes';

class PageWrapper extends Component {
  render() {
    return (
    <div>
      <Routes path="/" match={this.props.match}/>
    </div>
    )
  }
}

export default PageWrapper;