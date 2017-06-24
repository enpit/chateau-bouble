import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  background: ${props => props.theme.backgrounds[1]};
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
`

const Status = styled.div`
  color: ${props => props.theme.highlights[0]};;
`;

export default ({ title = '' }) => (
  <header>
    <Centered>
      <Title>{title}</Title>
      <Status>online</Status>
    </Centered>
  </header>
);
