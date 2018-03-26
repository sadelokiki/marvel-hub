import React, { Component } from 'react';
import HeaderComponent from '../../components/header';
import { connectToStore } from '../../lib/util';
import Characterlist from '../../components/home';
import './style.css';

class Home extends Component {
  
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    return (
      <div className="page-wrapper">
        <HeaderComponent {...this.props} />
        { this.props.characters ? <Characterlist {...this.props } /> : 'Loading charactes...' }
      </div>
    )
  }
}

export default connectToStore(Home);