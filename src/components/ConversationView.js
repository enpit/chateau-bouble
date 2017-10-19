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
    const { messages, user, api } = this.props;

    const bubbles = messages.map((message, index) => {
        let bubbleli;

        if (index === messages.length-1) {
            bubbleli =
                <li key={message.time} ref={ (el) => {this.el = el;} }>
                    <Message author={message.author} content={message.content} time={message.time} type={message.type} isOwnMessage={message.author === user} api={api} user={user} />
                </li>;
        } else {
            bubbleli =
                <li key={message.time}>
                    <Message author={message.author} content={message.content} time={message.time} type={message.type} isOwnMessage={message.author === user} api={api} user={user}/>
                </li>;
        }

        return bubbleli;
    });

    return (
        <MessageUL>{bubbles}</MessageUL>
    );

  }

};

export default ConversationView;
