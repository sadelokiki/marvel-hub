import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import { connectToStore } from '../../lib/util';
import HeaderComponent from '../../components/header';
import {Header } from 'semantic-ui-react';
import moment from 'moment'
import './style.css';

class ActivityComponent extends Component {

  componentDidMount() {
    this.props.fetchActivities()
  }

  render() {
    return (
      <div>
        <div className="header-act"><Header>Activity Log</Header></div>
        <div className="activity-wrapper">
          { this.props.characters.activities ? this.renderActivities(this.props.characters.activities) : <h5>Loading activities...</h5>}
        </div>
      </div>
    )
  }

  renderActivities(activities) {
    { return activities.length ? activities.map((item,i)=> {
      return (
        <List key={i}> {item.name}
        <span>{moment(item.createdAt).format('MM/DD/YYYY, h:mm:ss a')}</span>
        </List> 
      )
    }) :  <List>No Acivity to show</List> }
  }
}

export default connectToStore(ActivityComponent)