import React from 'react';
import styled from 'styled-components';

var Bubble = styled.div`
  background-color: #e9ff70;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px;
`;

const Text = styled.span`
  font-size: 14px;
`;

var Author = styled.span`
  color: #8c9943;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
`;

const bubble = function ({author, text, isOwnMessage}) {

  if (isOwnMessage) {
    Bubble = styled(Bubble)`
      background-color: #70d6ff;
    `;
    Author = styled(Author)`
      display: none;
    `;
  }

  return (
    <Bubble>
      <Author>{author}</Author>
      <Text>{text}</Text>
    </Bubble>
  );
};

export default bubble;
