import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Chat from './containers/Chat';
import store from './store';

import {
  setMessages,
  setUser
} from './actions/messages';

class ChateauBuble extends Component {

  constructor (props) {
    super(props);
    this.updateProps(props);
  }

  componentWillReceiveProps (nextProps) {
    this.updateProps(nextProps);
  }

  updateProps (props) {
    store.dispatch(setMessages(props.messages));
    store.dispatch(setUser(props.user));
  }

  render () {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    )
  }
}


export default ChateauBuble;
