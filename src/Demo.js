import React, { Component } from 'react';

import ChateauBuble from './ChateauBuble';

class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: 'Janis', text: '🏰' },
        { author: 'Peter', text: '🗯' }
      ],
      user: 'Janis'
    }
  }

  onAddMessage (msg) {
    this.setState((prevState, props) => {
      return { messages: ([...(prevState.messages), msg])}
    });
  }

  render () {
    setTimeout(() => this.onAddMessage({ author: 'Janis', text: '🐺'}), 3000);
    return <ChateauBuble messages={this.state.messages}
                         onAddMessage={this.onAddMessage}
                         theme="default"
                         user={this.state.user}
                         />
  }
}

export default Demo;
