import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

//import Bubble from './Bubble';

import ImageBubble from './ImageBubble';
import TextBubble from './TextBubble';
import SelectionBubble from './SelectionBubble';
import SenderImage from './SenderImage';

const ForeignMessage = styled.div`
  clear: right;
  margin: 0.5em 0;
  max-width: calc(0.8 * ${props => props.theme.dimensions.width});
`;

const OwnMessage = styled(ForeignMessage)`
  float: right;
`;

const Time = styled.span`
  color: ${props => props.theme.Time.color};
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding-left: 49px;
  margin-bottom: 0.25em;
`;

class message extends React.Component {

  shouldComponentUpdate (nextProps) {
    return this.props.content === nextProps.content;
  }

  render () {
    const {api, author, content, time, type, isOwnMessage, user} = this.props;
    let Bubble, StyledMessage;

    if (isOwnMessage) {
      StyledMessage = OwnMessage;
    } else {
      StyledMessage = ForeignMessage;
    }

    if (type === 'text') {
      Bubble = TextBubble;
    } else if (type === 'image'){
      Bubble = ImageBubble;
    } else if (type === 'selection') {
      Bubble = SelectionBubble;
    } else {
      Bubble = null;
    }

    return (
      <StyledMessage>
        <Time>{moment(time).format('h:mm a')}</Time>
        <div>
          { !isOwnMessage && <SenderImage author={author} />}
          <Bubble author={author} type={type} content={content} isOwnMessage={isOwnMessage} user={user} api={api} />
        </div>
      </StyledMessage>
    );
  }
};

export default message;
