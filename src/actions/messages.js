export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
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
