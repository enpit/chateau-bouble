//import css from '../styles/index.css';
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import Header from './Header';
import ConversationView from './ConversationView';
import TextInput from './TextInput';

const ChatView = styled.div `
    background-color: ${props => props.theme.ChatView.background};
    font-family: ${props => props.theme.ChatView.fontFamily};
    font-size: 14px;
    height: ${props => props.dimensions.height}px;
    width: ${props => props.dimensions.width}px;
`;

export default ({dimensions, interactiveMode, messages, onAddMessage, status, theme, title, user}) => {

  var api = { onAddMessage };

  return (
    <ThemeProvider theme={theme}>
      <ChatView dimensions={dimensions}>
        { interactiveMode && <Header status={status} title={title} user={user}/>}
        <ConversationView api={api} messages={messages} user={user}/>
        { interactiveMode && <TextInput onAddMessage={onAddMessage} user={user}/>}
      </ChatView>
    </ThemeProvider>
  );
};