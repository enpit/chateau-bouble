import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import ImageSelect from './ImageSelect';
import VerticalCenteredDiv from './VerticalCenteredDiv';

const TextView = styled.div`
  background-color: #ededed;
  clear: right;
  height: calc(10% - 10px);
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

const TextInputArea = styled.input`
  &::placeholder {
    color: #b2b2b2;
  }
  &:focus {
    border: 1px solid ${props => props.theme.highlights[0]};
    outline: none;
  }
  &:hover {
    border: 1px solid white;
  }
  border: 1px solid #b2b2b2;
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 10px;
  transition: border 1s;
  width: calc(100% - 22px);
`;

const TextSubmitButton = styled.span`
  background-color: #70d6ff;
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
