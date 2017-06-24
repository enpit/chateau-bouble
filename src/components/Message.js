import React from 'react';
import { Provider } from 'react-redux';
import interaction from '../reducers/interaction';
import { createStore } from 'redux';
import styled from 'styled-components';
import Bubble from './Bubble';

const Message = styled.div`
  margin: 1em 0;
`;

const Time = styled.span`
  color: #999;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding-left: 1em;
  margin-bottom: 0.25em;
`;

const message = function ({author, text, time}) {

  return (
    <Message>
      <Time>{time}</Time>
      <Bubble author={author} text={text} />
    </Message>
  );
};

export default styled(message)`margin: 1em 0;`;
