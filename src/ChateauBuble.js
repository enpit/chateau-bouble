import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Chat from './containers/Chat';
import configureStore from './store';

import {
  setMessages,
  setUser
} from './actions/messages';

class ChateauBuble extends Component {

  constructor (props) {
    super(props);
    this.store = configureStore({});
    this.initialLoad = true;
    this.updateProps(props);
  }

  componentWillReceiveProps (nextProps) {
    this.updateProps(nextProps);
  }

  shouldComponentUpdate () {
    if (this.initialLoad) {
      this.initialLoad = false;
      return true;
    } else {
      /*
       * the root component itself should not update when the props change
       * instead, the child components are automatically updated via redux because
       * the store is updated in `updateProps`
       */
      return false;
    }
  }

  updateProps (props) {
    this.store.dispatch(setMessages(props.messages));
    this.store.dispatch(setUser(props.user));
  }

  render () {
    return (
      <Provider store={this.store}>
        <Chat />
      </Provider>
    )
  }
}


export default ChateauBuble;
