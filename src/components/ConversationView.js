import React from 'react';
import Bubble from './Bubble';

const ChatView = function ({messages}) {

    const bubbles = messages.map((message, index) => {
        return (
            <li key={index}><Bubble author={message.author} text={message.text} /></li>
        );
    });

    return (
        <ul>{bubbles}</ul>
    );
};

export default ChatView;
