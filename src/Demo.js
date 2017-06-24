import React, { Component } from 'react';
import './demo.css';

import ChateauBuble from './ChateauBuble';

class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: 'Peter', text: 'How\'s your hackathon going?', time: 1498326808910 },
        { author: 'Janis', text: 'Awesome!', time: 1498327408910 },
        { author: 'Andreas', text: 'Good job', time: 1498329608910 },
        { author: 'Peter', text: 'thx', time: 1498329908910 }
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
                      onAddMessage={(msg) => this.onAddMessage(msg)}
                      theme="default"
                      user={this.state.user}
                      />
        </div>
  }
}

export default Demo;
