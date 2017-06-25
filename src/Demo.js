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

const botMessages = [
  { author: peter, type: 'text', content: 'Hi! How are you doing?', time: 1498326908910 },
  { author: peter, type: 'text', content: 'Awesome! Do you want a cat picture?', time: 1498326108910 },
  { author: peter, type: 'image', content: { alt: 'cats are awesome', url: 'https://fthmb.tqn.com/INZEtkWYEpsZaksoewT_mA4DREo=/960x0/filters:no_upscale()/about/Two-kittens-GettyImages-559292093-58822e4f3df78c2ccd8b318c.jpg'}, time: 1498326118910 }
];

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
      theme: 'default',
      interactiveMode: true
    }
  }

  mockReply () {
      // mock a reply by another user - in reality the messages could be updated by a server
      if (botMessages.length > 0) {
        const msg = botMessages.shift();
        setTimeout(() => {
          msg.time = Date.now();
          this.setState((prevState, props) => {
            return { ...prevState, messages: ([...(prevState.messages), msg])};
          });
        }, 3000);
      }
  }

  onAddMessage (msg) {
    this.mockReply();
    this.setState((prevState, props) => {
      return { ...prevState, messages: ([...(prevState.messages), msg])};
    });
  }

  switchTheme (theme) {
    this.setState(prevState => {
      return { ...prevState, theme };
    });
  }

  onChangeInteractiveMode () {
    this.setState(prevState => {
      return { ...prevState, interactiveMode: !prevState.interactiveMode }
    })
  }

  render () {
      return <div style={{
          margin: '0 auto',
          width: 420
        }}>
        <ChateauBuble chatStatus={this.state.chatStatus}
                      chatTitle={this.state.chatTitle}
                      messages={this.state.messages}
                      onAddMessage={(msg) => this.onAddMessage(msg)}
                      theme={this.state.theme}
                      user={this.state.user}
                      interactiveMode={this.state.interactiveMode}
                      dimensions={{ width: 420, height: 600 }}
                      />
          <ButtonSwitcher>
            <span>Switch Themes:</span>
            <button onClick={() => this.switchTheme('default')}>Default</button>
            <button onClick={() => this.switchTheme('classic')}>Classic</button>
            <button onClick={() => this.switchTheme('green')}>Green</button>
            <button onClick={() => this.switchTheme('nature')}>Nature</button>
          </ButtonSwitcher>
          <label>
            Interactive Mode:
            <input
            name="isGoing"
            type="checkbox"
            checked={this.state.interactiveMode}
            onChange={() => this.onChangeInteractiveMode()} />
          </label>
        </div>
  }
}

export default Demo;
