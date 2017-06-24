import {
  SEND_MESSAGE,
  SET_MESSAGES,
  SET_METADATA,
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
    case SET_METADATA:
      return {
        ...state,
        status: action.data.status,
        title: action.data.title,
        user: action.data.user
      };
    case UPDATE_MESSAGE:
      return { ...state, current: action.message };
    default:
      return state;
  }
};

export default messages;
