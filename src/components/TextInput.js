import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import TextArea from 'react-autosize-textarea';

import ImageSelect from './ImageSelect';
import VerticalCenteredDiv from './VerticalCenteredDiv';

const TextView = styled.div`
  background-color: ${props => props.theme.TextView.backgroundColor};
  border-top: ${props => props.theme.TextView.borderTop};
  clear: right;
  height: calc(10% - 11px);
  padding: 5px;
  width: calc(100% - 10px);
`;

const TextInputWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  padding: 0 1%;
  text-align: center;
  width: 78%;
`;

const TextSubmitWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  width: 10%;
`;

const TextInputArea = styled(TextArea)`
  &::placeholder {
    color: ${props => props.theme.TextInputArea.placeholder.color};
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
  font-size: 14px;
  padding: 5px 10px;
  transition: border 1s;
  width: calc(100% - 22px);
  max-width: calc(100% - 22px);
  min-width: calc(100% - 22px);
`;

const TextSubmitButton = styled.span`
  background-color: ${props => props.theme.TextSubmitButton.backgroundColor};
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
    background-color: ${props => props.theme.TextSubmitButton.hover.backgroundColor};
    cursor: pointer;
  }

  transition: background-color 1s;
`;

const ImageSelectWrapper = VerticalCenteredDiv.extend`
  display: inline-block;
  position: relative;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  width: 10%;
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
            onKeyUp={(event) => {
              if (event.keyCode === 13 && content !== '') {
                onSubmitText(content);
              }
            }}
            placeholder="type here"
          />
        </TextInputWrapper>
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
