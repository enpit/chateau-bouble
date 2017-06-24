import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import ImageBubble from './ImageBubble';
import TextBubble from './TextBubble';
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
    return this.props.content === nextProps.content;
  }

  render () {
    const {author, content, time, isOwnMessage} = this.props;
    let Bubble, StyledMessage;

    if (isOwnMessage) {
      StyledMessage = OwnMessage;
    } else {
      StyledMessage = ForeignMessage;
    }

    if (typeof content === 'string') { // content is a text message
      Bubble = TextBubble;
    } else {
      Bubble = ImageBubble;
    }

    return (
      <StyledMessage>
        <Time>{moment(time).format('h:mm a')}</Time>
        <div>
          { !isOwnMessage && <SenderImage author={author} />}
          <Bubble author={author} content={content} isOwnMessage={isOwnMessage}/>
        </div>
      </StyledMessage>
    );
  }
};

export default message;
