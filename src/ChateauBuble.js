import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './assets/font-awesome/css/font-awesome.min.css';

import ChatView from './components/ChatView';
import configureStore from './store';

import { setTheme } from './actions/themes';
import { Themes } from './reducers/themes';

class ChateauBuble extends Component {

  constructor (props) {
    super(props);

    this.store = configureStore({});
  }

  shouldComponentUpdate (nextProps) {
    return (this.props.interactiveMode !== nextProps.interactiveMode) ||
            (this.props.messages.length !== nextProps.messages.length);
  }

    render () {
        const { dimensions, interactiveMode, onAddMessage } = this.props;
        const theme = Themes[this.props.theme || 'chateauBuble'];

        return (
            <Provider store={this.store}>
                <ChatView
                    dimensions={dimensions}
                    interactiveMode={interactiveMode}
                    onAddMessage={onAddMessage}
                    messages={this.props.messages}
                    user={this.props.user}
                    theme={theme}
             />
          </Provider>
        );
    }
}


export default ChateauBuble;
