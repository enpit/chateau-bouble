import React from 'react';
import styled from 'styled-components';

import Author from './Author';

const ForeignBubble = styled.div`
  background-color: ${props => props.theme.highlights[1]};
  border-radius: 10px;
  display: inline-block;
  padding: 7px 10px;
`;

const OwnBubble = styled(ForeignBubble)`
  background-color: ${props => props.theme.highlights[0]};
  float: right;
`;

const GenericBubble = (Message) => {
  return ({author, content, isOwnMessage}) => {
    let Bubble;
    if (isOwnMessage) {
      Bubble = OwnBubble;
    } else {
      Bubble = ForeignBubble;
    }

    return (
      <Bubble>
        <Author author={author} isOwnMessage={isOwnMessage} />
        <Message content={content} />
      </Bubble>
    );
  };
}

export default GenericBubble;
