import React, { Component } from 'react';
import Bubble from './Bubble';

const ChatView = function ({messages}) {

    const bubbles = messages.map((message, index) => {
        return (
            <li><Bubble key={index} author={message.author} text={message.text} /></li>
        );
    });

    return (
        <ul>{bubbles}</ul>
    );
};

export default ChatView;
