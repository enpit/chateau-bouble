import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';

var Message = styled.div`
  margin: 0.5em 0;
  max-width: 240px;
`;

var Time = styled.span`
  color: #999;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding-left: 1em;
  margin-bottom: 0.25em;
`;

const message = function ({author, text, time, isOwnMessage}) {

  if (isOwnMessage) {
    Message = styled(Message)`
      float: right;
    `;
    Time = styled(Time)`

    `;
  }

  return (
    <Message>
      <Time>{time}</Time>
      <Bubble author={author} text={text} isOwnMessage={isOwnMessage}/>
    </Message>
  );
};

export default message;
