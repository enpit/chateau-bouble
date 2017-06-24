import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  background: #ededed;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
`

const Status = styled.div`
  color: blue;
`;

export default ({ title = '' }) => (
  <header>
    <Centered>
      <Title>{title}</Title>
      <Status>online</Status>
    </Centered>
  </header>
);
