import React from 'react';
import Main from '../../main';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Main />
    </div>
  )
}

export default App;