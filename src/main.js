import React from 'react';
import { Route } from 'react-router-dom';
import Pages from './containers/pages';


const Main = () => {
  return (
    <div>
      <Route path='/' component={Pages}/>
    </div>
  )
}

export default Main;