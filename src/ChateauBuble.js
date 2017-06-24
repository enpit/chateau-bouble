import React from 'react';
import { Provider } from 'react-redux';

import Chat from './containers/Chat';
import store from './store';

const ChateauBuble = ({
  messages = []
}) => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default ChateauBuble;
