import React from 'react';
import styled from 'styled-components';


const ForeignAuthor = styled.span`
  color: ${props => props.theme.text[2]};
  display: block;
  font-size: 0.75em;
  font-weight: bold;
`;

const OwnAuthor = styled(ForeignAuthor)`
  display: none;
`;


const Author = ({author = {}, isOwnMessage = true }) => {
  if (isOwnMessage) {
    return <OwnAuthor></OwnAuthor>;
  } else {
    return <ForeignAuthor>{author.name}</ForeignAuthor>
  }
};

export default Author;
