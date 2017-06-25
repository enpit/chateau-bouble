import React from 'react';
import Tooltip from 'react-tooltip';
import { Emoji, Picker } from 'emoji-mart';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import VerticalCenteredDiv from './VerticalCenteredDiv';

const StyledPicker = styled(Picker)`
  height: 300px;
`;

// const EmojiLogo = styled(FontAwesome)`
//   color: ${props => props.theme.text[3]};
//   font-size: 22px;

//   &:hover {
//     color: ${props => props.theme.highlights[2]};
//     cursor: pointer;
//   }

//   transition: color 1s;
// `;

//const EmojiLogo = styled.div`
const EmojiLogo = styled(VerticalCenteredDiv)`

  display: inline;

  > span {
    display: inline-block;
  }

  span > span {
    filter: grayscale(100%);
    transition: filter 1s;  
  }

  span > span:hover {
    filter: none;
  }
`;

const EmojiPicker = () => (
  <div>
    <EmojiLogo data-tip data-for="picker-tooltip" data-event="click focus">
      <Emoji emoji="smiley" size={20} set="emojione" />
    </EmojiLogo>
    <Tooltip place="top" type="light" effect="solid" id="picker-tooltip" globalEventOff="click">
      <StyledPicker set="emojione" />
    </Tooltip>
  </div>
);

export default EmojiPicker;
