import React from 'react';
import { Card, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';
import './style.css';

const baseUrl = `http://localhost:3001/api`
export default (props) => {
  const showDetails = () => {
    props.openModal();
    props.displayDetails(props.data);
  }

  const imagePath = props.data.thumbnail.path + '/standard_xlarge.' + props.data.thumbnail.extension 
  return (
    <div className="wrapper">
      <Card centered 
         image={imagePath}
         header={props.data.name}
         meta={<p onClick={showDetails}>View More</p>}>
      </Card>
    </div>
  )
}

