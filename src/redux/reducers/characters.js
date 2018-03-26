import { SAVE_CHARACTERS, SET_LOADING_STATUS } from "../actionsConstants";

export default function characters(state={}, action) {
  switch(action.type) {
  
  case SAVE_CHARACTERS:
    return {...state, allCharacters: action.payload};
    case SET_LOADING_STATUS: 
      return {...state, loading: action.payload}
    default:
      return state;
  }
}