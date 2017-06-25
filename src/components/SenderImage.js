import React from 'react';
import styled from 'styled-components';

const size = 32;
const Image = styled.img`
  border-radius: ${size/2}px;
  float: left;
  height: ${size}px;
  margin-right: 7px;
  width: ${size}px;
`;

const SenderImage = ({author = {}}) => {
  return <Image alt={author.name} src={author.image}></Image>;
};

export default SenderImage;
