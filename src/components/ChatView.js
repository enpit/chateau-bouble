//import css from '../styles/index.css';
import React from 'react';
import styled from 'styled-components';

import ConversationView from './ConversationView';
import MessageInput from '../containers/MessageInput';

const ChatView = styled.div`
    background-color: white;
    font-family: "Helvetica Neue", Arial, Verdana, sans-serif;
    font-size: 14px;
    width: 100%
`;

const chatview = function ({messages, onAddMessage, user}) {

    return (
        <ChatView>
            <ConversationView messages={messages} user={user} />
            <MessageInput onAddMessage={onAddMessage} user={user} />
        </ChatView>
    );
};

export default chatview;
