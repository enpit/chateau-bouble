import React from 'react';
import Tooltip from 'rc-tooltip';
import { Emoji, Picker } from 'emoji-mart';
import styled from 'styled-components';

import VerticalCenteredDiv from './VerticalCenteredDiv';

import style from '../emoji-mart.css';

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

const EmojiPicker = ({ onPickEmoji }) => (
  <div>
    <Tooltip
      placement="topRight"
      mouseEnterDelay={0}
      mouseLeaveDelay={0.5}
      destroyTooltipOnHide={true}
      trigger={['hover']}
      overlay={<Picker onClick={onPickEmoji}/>}
    >
      <EmojiLogo>
        <Emoji emoji="smiley" size={20} set="emojione"/>
      </EmojiLogo>
    </Tooltip>
  </div>
);

export default EmojiPicker;
