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
    this.el.scrollIntoView();
  }

  render () {

    const { messages, user } = this.props;

    const bubbles = messages.map((message, index) => {

      return (
          <li key={index}><Message author={message.author} text={message.text} time={message.time} isOwnMessage={message.author === user} /></li>
      );

    });

    const dummyli = <li key={bubbles.length} ref={ (el) => {this.el = el;} }></li>;

    bubbles.push(dummyli);

    return (
        <ConversationView>{bubbles}</ConversationView>
    );
  }

}

export default conversationview;
