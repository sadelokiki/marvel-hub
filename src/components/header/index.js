import React, { Component } from 'react';
import './style.css';
import {Button,  Header } from 'semantic-ui-react';
import { connectToStore } from '../../lib/util';

class HeaderComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.user = JSON.parse(localStorage.getItem('user')) || null
    console.log(this.user, 'sdfsd')
  }

  render() {
    return (
      <div className="wrapper">
        <Header as='h3' block>
          <div className="icon">MarvelHub</div>
          <div className="welcome"> Welcome {this.user.username}</div>
          <Button onClick={this.gotoActivities.bind(this)}>Activity Log</Button>
        </Header>
      </div>
    )
  }

  gotoActivities() {
    this.props.history.push('/activities');
  }

}

export default connectToStore(HeaderComponent);