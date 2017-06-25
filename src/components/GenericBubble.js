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
  background-color: ${props => props.theme.highlights[1]};
  border-radius: 10px;
  /*box-shadow: -1px 1px 0px ${props => props.theme.text[1]};*/
  display: inline-block;
  padding: 5px 10px 7px 10px;
`;

const OwnBubble = ForeignBubble.extend`
  background-color: ${props => props.theme.highlights[0]};
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
