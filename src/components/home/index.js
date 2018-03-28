import React, { Component } from 'react';
import './style.css';
import { connectToStore } from '../../lib/util';


import { Grid, Loader, Modal, Header } from 'semantic-ui-react';
import CharacterComponent from '../character';

class Characterlist extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      active: false,
      selectedName: null,
      series: [],
      stories: [],
      relatedlinks: [],
    }
  }
  
  renderLoader() {
    return <Loader active />
  }

  showModal() {

    return (
      <Modal open={this.state.active} onClose={this.hideModal.bind(this)}>
        <Modal.Header>{this.state.selectedName}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>

            <Header>Series</Header> 
            { this.state.series.length ? this.state.series.map((item, i) => {
              return <p key={i}>{item.name}</p>
            }) : 'No series to display' }

            <Header>Stories</Header> 
            { this.state.stories.length ? this.state.stories.map((item, i) => {
              return <p key={i}>{item.name}</p>
            }) : 'No stories to display' }

            <Header>Related Links</Header> 
            { this.state.relatedlinks.length ? this.state.relatedlinks.map((item, i) => {
              return <a href={item.url} key={i}>{item.url}</a>
            }) : 'No stories to display' }

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }


  hideModal() {
    this.setState({ active: false })
  }

  revealDetails() {
    this.setState({ active: true })
  }

  getSelectedCharacter(selected) {
    let filtered = this.props.characters.allCharacters.filter((item) => { 
      return item === selected
    }); 
    let details = filtered[0]
    this.setState({
      selectedName: details.name,
      series: details.series.items,
      stories: details.stories.items,
      relatedlinks: details.urls
    })
  }


  render() {
    return (
      <div className="row list-wrapper">
        <Grid divided="vertically">
        <Grid.Row columns={3}>
            { !this.props.characters.allCharacters ? <h3>Loading characters...</h3> : this.props.characters.allCharacters.map((character, i) => {
              return (
                <div key={i}>
                  <Grid.Column key={i}>
                  <CharacterComponent data={character} openModal={this.revealDetails.bind(this)} displayDetails={this.getSelectedCharacter.bind(this)}  />
                 { this.showModal()}
                </Grid.Column>
                </div>
              )
            }) }
        </Grid.Row>
      </Grid>
     </div>
    )
    
  }
}

export default connectToStore(Characterlist);