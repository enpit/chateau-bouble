import React from 'react';
import styled from 'styled-components';

const Bubble = styled.div`
  background-color: #e9ff70;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Author = styled.span`
  color: #8c9943;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
`;

const bubble = function ({author, text}) {

  return (
    <Bubble>
      <Author>{author}</Author>
      <Text>{text}</Text>
    </Bubble>
  );
};

export default bubble;
