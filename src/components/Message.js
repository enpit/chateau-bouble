import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Bubble from './Bubble';
import SenderImage from './SenderImage';

const ForeignMessage = styled.div`
  clear: right;
  margin: 0.5em 0;
  max-width: 240px;
`;

const OwnMessage = styled(ForeignMessage)`
  float: right;
`;

const Time = styled.span`
  color: ${props => props.theme.text[3]};
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding-left: 10px;
  margin-bottom: 0.25em;
`;

class message extends React.Component {

  shouldComponentUpdate (nextProps) {
    return this.props.text === nextProps.text;
  }

  render () {
    const {author, text, time, isOwnMessage} = this.props;
    let StyledMessage;

    if (isOwnMessage) {
      StyledMessage = OwnMessage;
    } else {
      StyledMessage = ForeignMessage;
    }

    return (
      <StyledMessage>
        <Time>{moment(time).format('h:mm a')}</Time>
        <div>
          { !isOwnMessage && <SenderImage author={author} />}
          <Bubble author={author} text={text} isOwnMessage={isOwnMessage}/>
        </div>
      </StyledMessage>
    );
  }
};

export default message;
