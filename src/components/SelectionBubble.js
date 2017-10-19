import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import GenericBubble from './GenericBubble';

const Text = styled.span`
  display: inline-block;
  font-size: 14px;
  max-width: calc(0.7 * ${props => props.theme.dimensions.width});
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
  word-wrap: break-word;

  p {
      margin: 0;
  }
`;

const createMessage = (user, content, type) =>
  ({ author: user, content, time: (new Date()).getTime(), type });

class SelectionBubbleClass extends React.Component {

  constructor (props) {
    super(props);

    this.postSelection = this.postSelection.bind(this);
  }

  postSelection(evt) {
    const message = createMessage(this.props.user, evt.target.value, 'text');
    this.props.api.onAddMessage(message);
  }

  render() {

    const {content, api} = this.props;
    const options = content.map((option) => (<input type="button" value={option} onClick={this.postSelection} />));

    return (
      <Text>
        {options}!
      </Text>
    )
  }

}

const SelectionBubble = GenericBubble(SelectionBubbleClass);

export default SelectionBubble;
