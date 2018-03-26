import React, { Component } from 'react';
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