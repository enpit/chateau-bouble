import React from 'react';
import Bubble from './Bubble';

const ChatView = function ({messages}) {

    const bubbles = messages.map((message, index) => {
        return (
            <li key={index}><Bubble author={message.author} text={message.text} time={message.time}/></li>
        );
    });

    return (
        <ul className="conversation-view">{bubbles}</ul>
    );
};

export default ChatView;
