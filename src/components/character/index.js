import React from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import { routes } from '../../lib/constants';
import './style.css';

export default (props) => {
  const onClickCard = (cardName) => {
    props.openModal();
    props.displayDetails(props.data);
    trackActivity(cardName);
  }

  const trackActivity = cardName => {
    let activityString = `${cardName} has been visited`;
    let user = JSON.parse(localStorage.getItem('user'));
    let payload = {
      activity: activityString,
      id: user._id
    };
    axios.post(routes.TRACK, payload)
      .then((data) => {
      })
      .catch((err) => {
      })
  }

  const imagePath = props.data.thumbnail.path + '/standard_xlarge.' + props.data.thumbnail.extension 
  return (
    <div className="wrapper">
      <Card centered 
         image={imagePath}
         header={props.data.name}
         meta={<p onClick={onClickCard.bind(null, props.data.name)}>View More</p>}>
      </Card>
    </div>
  )
}

