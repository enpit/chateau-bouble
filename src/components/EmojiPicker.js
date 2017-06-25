import React from 'react';
import Tooltip from 'react-tooltip';
import { Picker } from 'emoji-mart';
import styled from 'styled-components';

const StyledPicker = styled(Picker)`
  height: 300px;
`;

const EmojiPicker = () => (
  <div>
    <a data-tip data-for="picker-tooltip" data-event="click focus">:)</a>
    <Tooltip place="top" type="light" effect="solid" id="picker-tooltip" globalEventOff="click">
      <StyledPicker set="emojione" />
    </Tooltip>
  </div>
);

export default EmojiPicker;
