import React, { Component } from 'react';
import './style.css';
import { Header } from 'semantic-ui-react';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header as='h3' block>Marvel Hub</Header>
      </div>
    )
  }
}

export default HeaderComponent;