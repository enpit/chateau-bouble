import React from 'react';
import styled from 'styled-components';

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

const Text = styled.span`
  display: inline-block;
  font-size: 14px;
  max-width: 220px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
  word-wrap: break-word;
`;

const ForeignAuthor = styled.span`
  color: ${props => props.theme.text[2]};
  display: block;
  font-size: 0.75em;
  font-weight: bold;
`;

const OwnAuthor = styled(ForeignAuthor)`
  display: none;
`;

const bubble = function ({author, text, isOwnMessage}) {

  var Author,
      Bubble;

  if (isOwnMessage) {
    Bubble = OwnBubble;
    Author = OwnAuthor;
  } else {
    Bubble = ForeignBubble;
    Author = ForeignAuthor;
  }

  return (
    <Bubble>
      <Author>{author}</Author>
      <Text>{text}</Text>
    </Bubble>
  );
};

export default bubble;
