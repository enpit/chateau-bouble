import React, { Component } from 'react';
import ChatView from './components/ChatView';

class App extends Component {
  
  render() {
    return (
      <ChatView messages={messages} />
    );
  }
}

export default App;
