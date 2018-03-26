import React from 'react';
import { Route } from 'react-router-dom';
import dashboard from './containers';


const Main = () => {
  return (
    <div className="full-height">
      <Route path="/" component={dashboard} />
    </div>
  )
}

export default Main;