import React, { Component } from 'react';
import Bubble from './Bubble';
import css from '../styles/index.css';

const ChatView = function ({messages}) {

    const bubbles = messages.map((message, index) => {
        return (
            <li><Bubble key={index} author={message.author} text={message.text} /></li>
        );
    });

    return (
        <div className="chatview">
            <ul>{bubbles}</ul>
        </div>
    );
};

export default ChatView;
