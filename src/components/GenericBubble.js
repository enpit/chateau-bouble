import React from 'react';
import styled from 'styled-components';

import Author from './Author';

const ForeignBubble = styled.div`
  background-color: ${props => props.theme.highlights[1]};
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px 7px 10px;
`;

const OwnBubble = styled(ForeignBubble)`
  background-color: ${props => props.theme.highlights[0]};
  float: right;
`;

const GenericBubble = (Message, BubbleAttributes) => {
  return ({author, content, isOwnMessage}) => {
    let Bubble;

    if (isOwnMessage) {
      Bubble = OwnBubble;
    } else {
      Bubble = ForeignBubble;
    }
    
    if (typeof BubbleAttributes === 'function') {
      Bubble = Bubble.extend`
       ${BubbleAttributes({content})}
      `;
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
