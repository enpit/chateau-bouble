import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './assets/font-awesome/css/font-awesome.min.css';

import ChatView from './components/ChatView';
import configureStore from './store';

import Themes from './reducers/themes';

class ChateauBuble extends Component {

  constructor (props) {
    super(props);

    this.store = configureStore({});
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
