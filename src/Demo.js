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
    this.setState((prevState, props) =>
      ([...(prevState.messages), msg]));
  }

  render () {
    return <ChateauBuble messages={this.state.messages}
                         onAddMessage={this.onAddMessage}
                         user={this.state.user} />
  }
}

export default Demo;
