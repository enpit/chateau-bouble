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

Pick different themes at runtime. Supported:

* `default`
* `blue`
* `nature`

### interactiveMode

If you just want to use the Chateau Bublé for displaying a chat view without a text input field or header, set this to false. Useful for example for displaying a website with a conversational UI. Defaults to `true`.

### chatStatus

A string describing the current status of the chat. Use this for setting a online / offline status.

### chatTitle

The title of your conversation.

### user

A string describing who the user of the application is. This string is matched against every message and if the author of the message matches `user` the corresponding chat bubble is rendered accordingly. The `user` should also have a `image` property, which is expected to be a URL or a base64 encoded image.

### dimensions

An object containing the ChateauBublés `height` and `width` in pixels.

## Usage

``` js
import React, { Component } from 'react';

import ChateauBuble from './ChateauBuble';

const peter = {
  id: 0,
  name: 'Peter',
  image: 'https://avatars1.githubusercontent.com/u/7101602?v=3&s=460'
};
const janis = {
  id: 1,
  name: 'Janis',
  image: 'https://avatars0.githubusercontent.com/u/8240324?v=3&s=460'
};
const andreas = {
  id: 2,
  name: 'Andreas',
  image: 'https://avatars2.githubusercontent.com/u/400791?v=3&s=460'
};

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messages: [
        {
          author: peter,
          type: 'text',
          content: 'How\'s your hackathon going?',
          time: 1498326808910
        }
      ],
      chatStatus: 'online',
      chatTitle: 'enpit #reactriot',
      user: janis,
      theme: 'default',
      interactiveMode: true
    }
  }

  onAddMessage (msg) {
    this.setState((prevState, props) => {
      return { messages: ([...(prevState.messages), msg])}
    });
  }

  render () {
    return <ChateauBuble chatStatus={this.state.chatStatus} chatTitle={this.state.chatTitle} messages={this.state.messages} onAddMessage={(msg) => this.onAddMessage(msg)} theme={this.state.theme} user={this.state.user} interactiveMode={this.state.interactiveMode} dimensions={{
            width: 420,
            height: 600
          }}/>
  }
}

export default Demo;
```
