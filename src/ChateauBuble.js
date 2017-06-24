import React from 'react';
import { Provider } from 'react-redux';

import Chat from './containers/Chat';
import store from './store';

const ChateauBuble = ({
  messages = [],
  user = ''
}) => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default ChateauBuble;
