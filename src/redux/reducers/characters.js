import { SAVE_CHARACTERS, SET_LOADING_STATUS, SAVE_ACTIVITIES } from "../actionsConstants";

export default function characters(state={}, action) {
  switch(action.type) {
  
  case SAVE_CHARACTERS:
    return {...state, allCharacters: action.payload};
    case SET_LOADING_STATUS: 
      return {...state, loading: action.payload}
    case SAVE_ACTIVITIES:
      return {...state, activities: action.payload}
    default:
      return state;
  }
}