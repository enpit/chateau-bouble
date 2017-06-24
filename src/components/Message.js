import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
  color: ${props => props.theme.text[3]};
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
      <Time>{moment(time).format('h:mm a')}</Time>
      <Bubble author={author} text={text} isOwnMessage={isOwnMessage}/>
    </Message>
  );
};

export default message;
