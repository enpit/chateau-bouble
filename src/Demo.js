import React, { Component } from 'react';
import './demo.css';

import ChateauBuble from './ChateauBuble';

const peter = { id: 0, name: 'Peter', image: 'https://avatars1.githubusercontent.com/u/7101602?v=3&s=460' };
const janis = { id: 1, name: 'Janis', image: 'https://avatars0.githubusercontent.com/u/8240324?v=3&s=460' };
const andreas = { id: 2, name: 'Andreas', image: 'https://avatars2.githubusercontent.com/u/400791?v=3&s=460' };


class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: peter, text: 'How\'s your hackathon going?', time: 1498326808910 },
        { author: janis, text: 'Awesome!', time: 1498327408910 },
        { author: andreas, text: 'Good job', time: 1498329608910 },
        { author: peter, text: 'thx', time: 1498329908910 }
      ],
      chatStatus: 'online',
      chatTitle: 'enpit #reactriot',
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
        <ChateauBuble chatStatus={this.state.chatStatus}
                      chatTitle={this.state.chatTitle}
                      messages={this.state.messages}
                      onAddMessage={(msg) => this.onAddMessage(msg)}
                      theme="default"
                      user={this.state.user}
                      />
        </div>
  }
}

export default Demo;
