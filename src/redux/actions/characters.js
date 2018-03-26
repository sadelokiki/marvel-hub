import BASE_URL, { routes } from '../../lib/constants';
import axios from 'axios';
import { SAVE_CHARACTERS, SET_LOADING_STATUS, SAVE_ACTIVITIES} from '../actionsConstants';
import { toast } from 'react-toastify';


export function setLoadingStatus(payload) {
  return {
    type: SET_LOADING_STATUS,
    payload
  }
}

export function saveCharacters(payload) {
  return {
    type: SAVE_CHARACTERS,
    payload
  }
}

export function saveActivities(payload) {
  return {
    type: SAVE_ACTIVITIES,
    payload
  }
}


export function fetchCharacters() {
  return async (dispatch, ownProps) => {
    dispatch(setLoadingStatus(true));
    try {
      let response = await axios.get(BASE_URL + `/characters`);
      dispatch(saveCharacters(response.data.results))
      // dispatch(setLoadingStatus(false));
    } catch (err) {
    }
    dispatch(setLoadingStatus(false))
  }


}

export function fetchActivities() {
  let user = JSON.parse(localStorage.getItem('user')) || null
  return async (dispatch, ownProps ) => {
    dispatch(setLoadingStatus(true));
    try {
      let response = await axios.get( routes.FETCH_ACTIVITIES + `/${user._id}`);
      dispatch(saveActivities(response.data.activities));
      dispatch(setLoadingStatus(true));
    } catch(err) {
    }
    dispatch(setLoadingStatus(true));
  }
}
