import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import GenericBubble from './GenericBubble';

const Text = styled.span`
  display: inline-block;
  font-size: 14px;
  max-width: calc(0.7 * ${props => props.theme.dimensions.width});
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
  word-wrap: break-word;

  p {
      margin: 0;
  }
`;

const TextBubble = GenericBubble(
  ({content}) => (
    <Text>
      <ReactMarkdown source={content} />
    </Text>
  )
);

export default TextBubble;
