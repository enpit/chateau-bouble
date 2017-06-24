import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ChatView from './components/ChatView';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ChatView messages={[]} />
      </Provider>
    );
  }
}

export default App;
