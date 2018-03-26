import React from 'react';
import { Card, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';
import { routes } from '../../lib/constants';
import './style.css';

const baseUrl = `http://localhost:3001/api`
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
    console.log(routes.TRACK, payload, 'request')
    axios.post(routes.TRACK, payload)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err, 'err tracking');
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

