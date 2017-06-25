import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './font-awesome-4.7.0/css/font-awesome.min.css';

import Chat from './containers/Chat';
import configureStore from './store';

import {
  setMessages,
  setMetadata
} from './actions/messages';

class ChateauBuble extends Component {

  constructor (props) {
    super(props);

    this.initialLoad = true;
    this.store = configureStore({});
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
    this.store.dispatch(setMetadata({
      status: props.chatStatus,
      title: props.chatTitle,
      user: props.user,
    }));
  }

  render () {
    return (
      <Provider store={this.store}>
        <Chat onAddMessage={this.props.onAddMessage} />
      </Provider>
    )
  }
}


export default ChateauBuble;
