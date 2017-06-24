import React from 'react';
import { Provider } from 'react-redux';

import Chat from './containers/Chat';
import store from './store';

import {
  setMessages,
  setUser
} from './actions/messages';

const ChateauBuble = ({
  messages = [],
  user = ''
}) => {
  store.dispatch(setMessages(messages));
  store.dispatch(setUser(user));
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  )
};

export default ChateauBuble;
