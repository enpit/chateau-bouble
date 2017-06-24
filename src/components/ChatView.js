import React from 'react';
import ConversationView from './ConversationView';

const ChatView = function ({messages, user}) {

    return (
        <div>
            <ConversationView messages={messages} />
            <span>User: {user}</span>
        </div>
    );
};

export default ChatView;
