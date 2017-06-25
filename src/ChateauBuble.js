import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './font-awesome-4.7.0/css/font-awesome.min.css';

import Chat from './containers/Chat';
import configureStore from './store';

import {
  setMessages,
  setMetadata
} from './actions/messages';
import { setTheme } from './actions/themes';

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

  shouldComponentUpdate (nextProps) {
    if (this.initialLoad) {
      this.initialLoad = false;
      return true;
    } else {
      return this.props.interactiveMode !== nextProps.interactiveMode;
    }
  }

  updateProps (props) {
    this.store.dispatch(setMessages(props.messages));
    this.store.dispatch(setMetadata({
      status: props.chatStatus,
      title: props.chatTitle,
      user: props.user,
    }));
    this.store.dispatch(setTheme(props.theme || 'chateauBuble'));

  }

  render () {
    const { dimensions, interactiveMode, onAddMessage } = this.props;
    return (
      <Provider store={this.store}>
        <Chat dimensions={dimensions} interactiveMode={interactiveMode} onAddMessage={onAddMessage} />
      </Provider>
    )
  }
}


export default ChateauBuble;
