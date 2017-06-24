import React, { Component } from 'react';
import ConversationView from './ConversationView';

const ChatView = function ({messages}) {

    return (
        <ConversationView messages={messages} />
    );
};

export default ChatView;
