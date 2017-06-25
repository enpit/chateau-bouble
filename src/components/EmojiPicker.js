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

class EmojiPicker extends React.Component {

  constructor (props) {
    super(props);
    this.pickerX = 0;
  }

  componentDidMount () {
    const rect = this.div.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const pickerWidth = 338;
    let x = rect.right - pickerWidth/2;
    if (x + pickerWidth > bodyRect.width) { // picker overflows to the right
      x += bodyRect.width - (x + pickerWidth) - 10;
    }
    this.pickerX = x;
    this.forceUpdate();
  }

  render () {
    const PickerContainer = styled.div`
      position: relative;
      left: ${this.pickerX}px !important;
    `;
    console.log(this.right);
    const { onPickEmoji } = this.props;
    return (
      <div ref={(el) => this.div = el }>
        <Tooltip
          placement="topRight"
          mouseEnterDelay={0}
          mouseLeaveDelay={0.5}
          destroyTooltipOnHide={true}
          trigger={['click']}
          overlay={<PickerContainer><Picker onClick={onPickEmoji}/></PickerContainer>}
        >
          <EmojiLogo>
            <Emoji emoji="smiley" size={20} set="emojione"/>
          </EmojiLogo>
        </Tooltip>
      </div>
    );
  }
}

export default EmojiPicker;
