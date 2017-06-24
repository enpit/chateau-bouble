//import css from '../styles/index.css';
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import Header from './/Header';
import ConversationView from './ConversationView';
import MessageInput from '../containers/MessageInput';

const ChatView = styled.div `
    background-color: ${props => props.theme.backgrounds[0]};
    font-family: "Helvetica Neue", Arial, Verdana, sans-serif;
    font-size: 14px;
    width: 100%
`;

export default ({messages, onAddMessage, theme, user}) => (
  <ThemeProvider theme={theme}>
    <ChatView>
      <Header />
      <ConversationView messages={messages} user={user}/>
      <MessageInput onAddMessage={onAddMessage} user={user}/>
    </ChatView>
  </ThemeProvider>
);
