import React, { Component } from 'react';

import ChateauBuble from './ChateauBuble';

class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: 'Peter', text: 'How\'s your hackathon going?', time: '13:14' },
        { author: 'Janis', text: 'Awesome!' }
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
      return <div style={{
          margin: '0 auto',
          width: 480
        }}>
        <ChateauBuble messages={this.state.messages}
                         onAddMessage={this.onAddMessage}
                         theme="default"
                         user={this.state.user}
                         />
        </div>
  }
}

export default Demo;
