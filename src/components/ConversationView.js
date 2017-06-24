import React from 'react';
import Message from './Message';
import styled from 'styled-components';

const ConversationView = styled.ul`
    height: calc(80% - 1em);
    list-style-type: none;
    margin: 0;
    overflow-y: scroll;
    padding-left: 0;
    padding-top: 1em;
`;

class conversationview extends React.Component {

  componentDidUpdate () {
    this.el.parentNode.scrollTop = this.el.parentNode.scrollTopMax;
  }

  render () {

    const { messages, user } = this.props;

    const bubbles = messages.map((message, index) => {

      var bubbleli;

      if (index === messages.length-1) {
        bubbleli = <li key={index} ref={ (el) => {this.el = el;} }><Message author={message.author} text={message.text} time={message.time} isOwnMessage={message.author === user} /></li>;
      } else {
        bubbleli = <li key={index}><Message author={message.author} text={message.text} time={message.time} isOwnMessage={message.author === user} /></li>;
      }

      return (
          bubbleli
      );

    });

    //const dummyli = <li key={bubbles.length} ref={ (el) => {this.el = el;} }></li>;

    //bubbles.push(dummyli);

    return (
      <ConversationView>{bubbles}</ConversationView>
    );

  }
  
};

export default conversationview;
