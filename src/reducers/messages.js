import {
  SET_MESSAGES,
  SET_USER
} from '../actions/messages';

const INITIAL_STATE = {};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, all: action.messages };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default messages;
