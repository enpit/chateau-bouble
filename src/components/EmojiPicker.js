import React from 'react';
import Tooltip from 'rc-tooltip';
import { Picker } from 'emoji-mart';
import styled from 'styled-components';

import style from '../emoji-mart.css';

const StyledPicker = styled(Picker)`
`;

const EmojiPicker = () => (
  <div>
    <Tooltip
      placement="topRight"
      mouseEnterDelay={0}
      mouseLeaveDelay={0.5}
      destroyTooltipOnHide={true}
      trigger={['hover']}
      overlay={<StyledPicker />}
    >
      <span>:)</span>
    </Tooltip>
  </div>
);

export default EmojiPicker;
