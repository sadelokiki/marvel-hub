import BASE_URL from '../../lib/constants';
import axios from 'axios';
import { SAVE_CHARACTERS, SET_LOADING_STATUS, } from '../actionsConstants';
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


export function fetchCharacters() {
  return async (dispatch, ownProps) => {1
    dispatch(setLoadingStatus(true));
    try {
      let response = await axios.get(BASE_URL + `/characters`);
      dispatch(saveCharacters(response.data.results))
      // dispatch(setLoadingStatus(false));
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoadingStatus(false))
  }
}
