import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import TextArea from 'react-autosize-textarea';

import EmojiPickInput from '../containers/EmojiPickInput';
import ImageSelect from './ImageSelect';

const TextView = styled.div`
  background-color: ${props => props.theme.TextView.backgroundColor};
  border-top: ${props => props.theme.TextView.borderTop};
  clear: right;
  display: block;
  height: calc(10% - 11px);
  padding: 5px;
  transition: background-color 1s;
  transition: border-top 1s;
  width: calc(100% - 10px);
`;

const TextInputWrapper = styled.div`
  display: inline-block;
  padding: 0 1%;
  text-align: center;
  vertical-align: middle;
  width: 78%;
`;

const TextSubmitWrapper = styled.div`
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  vertical-align: middle;
  width: 10%;
`;

const TextInputArea = styled(TextArea)`
  &::placeholder {
    color: ${props => props.theme.TextInputArea.placeholder.color};
    transition: color 1s;
  }
  &:focus {
    border: 1px solid ${props => props.theme.TextInputArea.focus.border};
    outline: none;
  }
  &:hover {
    border: ${props => props.theme.TextInputArea.hover.border};
  }
  border: ${props => props.theme.TextInputArea.border};
  border-radius: 15px;
  font-family: ${props => props.theme.ChatView.fontFamily};
  font-size: 14px;
  margin: 0;
  padding: 6px 10px;
  resize: none;
  transition: border 1s;
  width: calc(100% - 22px);
  max-width: calc(100% - 22px);
  min-width: calc(100% - 22px);
`;

const TextSubmitButton = styled.span`
  background-color: ${props => props.theme.TextSubmitButton.backgroundColor};
  border-radius: 16px;
  color: white;
  display: block;
  font-weight: bold;
  height: 25px;
  margin: 0 auto;
  padding-right: 2px;
  padding-top: 7px;
  text-align: center;
  width: 30px;

  &:hover {
    background-color: ${props => props.theme.TextSubmitButton.hover.backgroundColor};
    cursor: pointer;
  }

  transition: background-color 1s;
`;

const ImageSelectWrapper = styled.div`
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  vertical-align: middle;
  width: 10%;
`;

const EmojiPickerWrapper = styled.div`
  display: inline-block;
  left: -8%;
  position: relative;
  vertical-align: middle;
  width: 0;
`;

class TextInput extends React.Component {
  componentDidMount(){
    console.log(this.input);
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
            maxRows={3}
            innerRef={(comp) => { this.input = comp }}
            value={content}
            onChange={(event) => onUpdateMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                event.preventDefault();
                if (content !== '') {
                  onSubmitText(content);
                }
              }
            }}
            placeholder="type here"
          />
        </TextInputWrapper>
        <EmojiPickerWrapper>
          <EmojiPickInput content={content} />
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
