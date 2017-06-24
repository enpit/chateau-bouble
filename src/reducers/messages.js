import {
  SEND_MESSAGE,
  SET_MESSAGES,
  SET_USER,
  UPDATE_MESSAGE
} from '../actions/messages';

const INITIAL_STATE = {
  all: [],
  current: {}
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, sent: action.message };
    case SET_MESSAGES:
      return { ...state, all: action.messages };
    case SET_USER:
      return { ...state, user: action.user };
    case UPDATE_MESSAGE:
      return { ...state, current: action.message };
    default:
      return state;
  }
};

export default messages;
