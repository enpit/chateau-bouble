import React, { Component } from 'react';
import styled from 'styled-components';
import './demo.css';

import ChateauBuble from './ChateauBuble';

const peter = { id: 0, name: 'Peter', image: 'https://avatars1.githubusercontent.com/u/7101602?v=3&s=460' };
const janis = { id: 1, name: 'Janis', image: 'https://avatars0.githubusercontent.com/u/8240324?v=3&s=460' };
const andreas = { id: 2, name: 'Andreas', image: 'https://avatars2.githubusercontent.com/u/400791?v=3&s=460' };

const ButtonSwitcher = styled.div`
  margin-top: 50px;
`;

class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: peter, type: 'text', content: 'How\'s your hackathon going?', time: 1498326808910 },
        { author: janis, type: 'text', content: 'Awesome!', time: 1498327408910 },
        { author: andreas, type: 'text', content: '**Good** job', time: 1498329608910 },
        { author: peter, type: 'text', content: '`Hello World`', time: 1498329908910 },
        { author: peter, type: 'image', content: { alt: 'cats are awesome', url: 'http://www.ragamuffinkittens.org/breeders/ragamuffinkittens005002.jpg'}, time: 1498329958910 }
      ],
      chatStatus: 'online',
      chatTitle: 'enpit #reactriot',
      user: janis,
      theme: 'chateauBuble'
    }
  }

  onAddMessage (msg) {
    this.setState((prevState, props) => {
      return { ...prevState, messages: ([...(prevState.messages), msg])};
    });
  }

  switchTheme (theme) {
    this.setState((prevState, props) => {
      return { ...prevState, theme };
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
                      theme={this.state.theme}
                      user={this.state.user}
                      />
          <ButtonSwitcher>
            <span>Switch Themes:</span>
            <button onClick={() => this.switchTheme('chateauBuble')}>ChateauBuble</button>
            <button onClick={() => this.switchTheme('green')}>Green</button>
          </ButtonSwitcher>
        </div>
  }
}

export default Demo;
