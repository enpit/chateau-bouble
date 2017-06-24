import React from 'react';
import styled from 'styled-components';

import GenericBubble from './GenericBubble';

const Image = styled.img`
  display: inline-block;
  max-width: 220px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`;

const ImageBubble = GenericBubble(
  ({content}) => (
    <Image alt={content.alt} src={content.url} />
  )
);

export default ImageBubble;
