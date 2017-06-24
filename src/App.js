import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Chat from './containers/Chat';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    );
  }
}

export default App;
