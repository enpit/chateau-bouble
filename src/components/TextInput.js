import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import EmojiPicker from './EmojiPicker';
import ImageSelect from './ImageSelect';
import VerticalCenteredDiv from './VerticalCenteredDiv';

const TextView = styled.div`
  background-color: ${props => props.theme.backgrounds[1]};
  clear: right;
  height: calc(10% - 10px);
  padding: 5px;
  width: calc(100% - 10px);
`;

const TextInputWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  padding: 0 1%;
  text-align: center;
  width: 68%;
`;

const TextSubmitWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  width: 10%;
`;

const TextInputArea = styled.input`
  &::placeholder {
    color: ${props => props.theme.text[1]};
  }
  &:focus {
    border: 1px solid ${props => props.theme.highlights[0]};
    outline: none;
  }
  &:hover {
    border: 1px solid white;
  }
  border: 1px solid ${props => props.theme.text[1]};
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 10px;
  transition: border 1s;
  width: calc(100% - 22px);
`;

const TextSubmitButton = styled.span`
  background-color: ${props => props.theme.highlights[0]};
  border-radius: 14px;
  color: white;
  display: block;
  font-weight: bold;
  height: 23px;
  margin: 0 auto;
  padding-right: 2px;
  padding-top: 5px;
  text-align: center;
  width: 26px;

  &:hover {
    background-color: ${props => props.theme.highlights[2]};
    cursor: pointer;
  }

  transition: background-color 1s;
`;

const EmojiPickerWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  width: 10%;
`;

const ImageSelectWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  text-align: center;
  width: 10%;
`;

class TextInput extends React.Component {
  componentDidMount(){
    this.input.focus();
  }

  render () {
    const {content, onSubmitImage, onSubmitText, onUpdateMessage} = this.props;

    return (
      <TextView>
        <ImageSelectWrapper>
          <ImageSelect onSubmit={onSubmitImage} />
        </ImageSelectWrapper>
        <TextInputWrapper>
          <TextInputArea type="text"
            innerRef={(comp) => { this.input = comp }}
            value={content}
            onChange={(event) => onUpdateMessage(event.target.value)}
            onKeyUp={(event) => {
              if (event.keyCode === 13 && content !== '') {
                onSubmitText(content);
              }
            }}
            placeholder="type here"
          />
        </TextInputWrapper>
        <EmojiPickerWrapper>
          <EmojiPicker />
        </EmojiPickerWrapper>
        <TextSubmitWrapper>
          <TextSubmitButton onClick={() => content !== '' && onSubmitText(content)}>
            <FontAwesome name="paper-plane" />
          </TextSubmitButton>
        </TextSubmitWrapper>
      </TextView>
    );
  }
}

export default TextInput;
