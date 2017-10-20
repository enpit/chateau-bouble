import React from 'react';
import Message from './Message';
import styled from 'styled-components';

const MessageUL = styled.ul`
  height: calc(80% - 1em);
  list-style-type: none;
  margin: 0;
  overflow-y: scroll;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 1em;
  scroll-behavior: smooth;
  background: ${props => props.theme.ConversationView.background};
  background-size: ${props => props.theme.ConversationView.backgroundSize};
`;

/**
 * Returns a function that sets the ref of `that` (or null)
 */
const refHandler = (index, length, that) => {
  if (index === length) {
    return (el) => {that.el = el;};
  } else {
    return null;
  }
};

class ConversationView extends React.Component {

  componentDidUpdate () {
    this.scrollToBottom();
  }

  componentDidMount () {
    this.scrollToBottom();
  }

	scrollToBottom () {
		if (this.el === undefined) return;
		this.el.parentNode.style.overflowY = 'hidden';

		setTimeout(function () {
      this.el.parentNode.scrollTop = this.el.parentNode.scrollHeight;
			this.el.parentNode.style.overflowY = 'scroll';
    }.bind(this),0);
	}

  render () {
    const { messages, user } = this.props;

    const messagelis = messages.map((message, index) => (
      <li key={message.time} ref={refHandler(index, messages.length - 1, this)}>
        <Message author={message.author} content={message.content} time={message.time} type={message.type} isOwnMessage={message.author === user} />
      </li>
    ));

    return (
        <MessageUL>{messagelis}</MessageUL>
    );
  }
};

export default ConversationView;
