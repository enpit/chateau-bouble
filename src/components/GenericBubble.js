import React from 'react';
import styled, { keyframes } from 'styled-components';

import Author from './Author';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const ForeignBubble = styled.div`
  background-color: ${props => props.theme.ForeignBubble.backgroundColor};
  border-radius: 10px;
  box-shadow: ${props => props.theme.ForeignBubble.boxShadow};
  display: inline-block;
  padding: 5px 10px 7px 10px;
  transition: background-color 1s;
  transition: box-shadow 1s;
`;

const OwnBubble = ForeignBubble.extend`
  background-color: ${props => props.theme.OwnBubble.backgroundColor};
  float: right;
`;

const GenericBubble = (Message, BubbleAttributes) => {
  return class BubbleClass extends React.Component {
    constructor (props) {
      super(props);
      this.animate = true;
    }

    componentDidMount () {
      this.animate = false;
    }

    render () {
      const {author, content, isOwnMessage} = this.props;
      let Bubble;

      if (isOwnMessage) {
        Bubble = OwnBubble;
      } else {
        Bubble = ForeignBubble;
      }

      if (typeof BubbleAttributes === 'function') {
        Bubble = Bubble.extend`
         ${BubbleAttributes({content})}
        `;
      }

      if (this.animate) {
        Bubble = Bubble.extend`
          animation: ${fadeIn} .25s linear;
        `;
      }

      return (
        <Bubble>
          <Author author={author} isOwnMessage={isOwnMessage} />
          <Message content={content} />
        </Bubble>
      );
    }
  };
}

export default GenericBubble;
