import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';

const ForeignMessage = styled.div`
  clear: right;
  margin: 0.5em 0;
  max-width: 240px;
`;

const OwnMessage = styled(ForeignMessage)`
  float: right;
`;

var Time = styled.span`
  color: #999;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding-left: 10px;
  margin-bottom: 0.25em;
`;

const message = function ({author, text, time, isOwnMessage}) {

  var Message;

  if (isOwnMessage) {
    Message = OwnMessage;
    Time = styled(Time)`

    `;
  } else {
    Message = ForeignMessage;
  }

  return (
    <Message>
      <Time>{time}</Time>
      <Bubble author={author} text={text} isOwnMessage={isOwnMessage}/>
    </Message>
  );
};

export default message;
