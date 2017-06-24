import {
  CLEAR_MESSAGES,
  SEND_MESSAGE,
  SET_MESSAGES,
  SET_USER
} from '../actions/messages';

const INITIAL_STATE = {
  all: []
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, sent: action.message };
    case SET_MESSAGES:
      return { ...state, all: action.messages };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default messages;
