import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createHistory();

function configureStore() {
  return compose(applyMiddleware(thunk, logger, routerMiddleware(history)))
}

const defaultState = {
  characters: {
    selectedCharacter: null,
    allCharacters: null,
    loading: false,
    activities: null
  },
}

export default createStore(rootReducer, defaultState, configureStore());