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
  scroll-behavior: smooth;
  background: ${props => props.theme.ConversationView.background};
  background-size: ${props => props.theme.ConversationView.backgroundSize};
`;

class conversationview extends React.Component {

  componentDidUpdate () {
    this.scrollToBottom();
  }

  componentDidMount () {
    this.scrollToBottom();
  }

  scrollToBottom () {
    this.el.parentNode.style.overflowY = 'hidden';
    this.el.parentNode.scrollTop = this.el.parentNode.scrollHeight;
    setTimeout(function () {
      this.el.parentNode.style.overflowY = 'scroll';
    }.bind(this),0);
  }

  render () {

    const { messages, user } = this.props;

    const bubbles = messages.map((message, index) => {

      var bubbleli;

      if (index === messages.length-1) {
        bubbleli = <li key={index} ref={ (el) => {this.el = el;} }><Message author={message.author} content={message.content} time={message.time} type={message.type} isOwnMessage={message.author === user} /></li>;
      } else {
        bubbleli = <li key={index}><Message author={message.author} content={message.content} time={message.time} type={message.type} isOwnMessage={message.author === user} /></li>;
      }

      return (
          bubbleli
      );

    });

    return (
      <ConversationView>{bubbles}</ConversationView>
    );

  }

};

export default conversationview;
