import { combineReducers } from 'redux';
import {ADD_ARTIST, RECEIVE_ARTISTS} from './actions'

const INITIAL_STATE = {
  current: ['gg','yyy'],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
  users: [],
  artists: []
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const artistsReducer = (state = INITIAL_STATE.artists, action) => {
  switch (action.type) {
    case ADD_ARTIST:
      return [
        ...state, action.artist
      ]
    case RECEIVE_ARTISTS:
      return [
        ...state, ...action.artists
      ]
    default:
      return state
  }
};



export default combineReducers({
  friends: friendReducer,
  artists: artistsReducer
});