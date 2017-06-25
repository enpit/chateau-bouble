import React from 'react';
import styled from 'styled-components';

import GenericBubble from './GenericBubble';

const Image = styled.img`
  display: inline-block;
  max-width: 220px;
  opacity: 0;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`;

const ImageBubble = GenericBubble(
  ({content}) => (
    <Image alt={content.alt} src={content.url} />
  ), 
  ({content}) => (`
    background-image: url(${content.url});
    background-size: cover;

    > span {
      color: white;
      opacity: 0.7;
    }
    `
  )
);

export default ImageBubble;
