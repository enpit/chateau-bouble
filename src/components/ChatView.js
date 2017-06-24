//import css from '../styles/index.css';
import React from 'react';
import ConversationView from './ConversationView';
import styled from 'styled-components';

const ChatView = styled.div`
    background-color: white;
    font-family: "Helvetica Neue", Arial, Verdana, sans-serif;
    font-size: 14px;
    width: 100%
`;

const chatview = function ({messages, user}) {

    return (
        <ChatView>
            <ConversationView messages={messages} />
            <span>User: {user}</span>
        </ChatView>
    );
};

export default chatview;
