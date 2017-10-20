import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import Header from './Header';
import ConversationView from './ConversationView';
import MessageInputBar from './MessageInputBar';

const ChatViewWrapper = styled.div `
    background-color: ${props => props.theme.ChatView.background};
    font-family: ${props => props.theme.ChatView.fontFamily};
    font-size: 14px;
    height: ${props => props.dimensions.height}px;
    width: ${props => props.dimensions.width}px;
`;

const ChatView = ({dimensions, displayEmojiPicker, interactiveMode, messages, onAddMessage, status, theme, title, user}) => (
  <ThemeProvider theme={theme}>
    <ChatViewWrapper dimensions={dimensions}>
      { interactiveMode && <Header status={status} title={title} user={user}/>}
      <ConversationView messages={messages} user={user}/>
      { interactiveMode && <MessageInputBar onAddMessage={onAddMessage} user={user} displayEmojiPicker={displayEmojiPicker} />}
    </ChatViewWrapper>
  </ThemeProvider>
);

export default ChatView;
