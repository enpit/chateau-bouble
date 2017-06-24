import React from 'react';

import ConversationView from './ConversationView';
import MessageInput from '../containers/MessageInput';

const ChatView = function ({messages, user, onAddMessage}) {

    return (
        <div>
            <ConversationView messages={messages} />
            <span>User: {user}</span>
            <MessageInput onAddMessage={onAddMessage} user={user} />
        </div>
    );
};

export default ChatView;
