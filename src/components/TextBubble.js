import React from 'react';
import styled from 'styled-components';

import GenericBubble from './GenericBubble';

const Text = styled.span`
  display: inline-block;
  font-size: 14px;
  max-width: 220px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
  word-wrap: break-word;
`;

const TextBubble = GenericBubble(
  ({content}) => (
    <Text>{content}</Text>
  )
);

export default TextBubble;
