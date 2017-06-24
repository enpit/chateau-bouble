# Chateau Bublé

> the most exquisite Chatbubble component in React

## Remarks

The main contribution of this project is a reusable chat bubble component for React. For the purpose of this hackathon, we have also included some demo code which renders the ChateauBuble component and interacts with it. When releasing this component to the public after the hackathon, we will remove the demo code in `Demo.js` and just export the `ChateauBuble.js` component.

## API

### messages

Array of messages that should be rendered. When a new message arrives (e.g. from your messaging server) pass the `messages` array with the additional message(s) and Chateau Bublé will render the change accordingly. You should probably save the `messages` in component state (or in your Redux store if you use that).

### onAddMessage

Function that is executed when the user sends a new message via Chateau Bublé. This is where you should send the message to your server (if you have any). In most cases you should also update your `messages` to include the newly added message. See the `onAddMessage` function in 'Usage' for an example.

### theme

...

### user

A string describing who the user of the application is. This string is matched against every message and if the author of the message matches `user` the corresponding chat bubble is rendered accordingly.

## Usage

``` js
import React, { Component } from 'react';

import ChateauBuble from './ChateauBuble';

class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: 'Janis', text: '🏰' },
        { author: 'Peter', text: '🗯' }
      ]
    }
  }

  onAddMessage (msg) {
    this.setState((prevState, props) => {
      return { messages: ([...(prevState.messages), msg])}
    });
  }

  render () {
    return <ChateauBuble messages={this.state.messages}
                         onAddMessage={this.onAddMessage}
                         theme="default"
                         user="Peter" />
  }
}

export default Demo;
```
