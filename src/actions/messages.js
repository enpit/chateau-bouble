export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message
});

export const SET_MESSAGES = 'SET_MESSAGES';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
});

export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
});
