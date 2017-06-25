import React from 'react';
import styled from 'styled-components';

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
  margin-left: 10px;
  width: calc(90% - 10px);
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
    outline: none;
  }
  border: 1px solid ${props => props.theme.text[1]};
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 10px;
  width: calc(100% - 22px - 32px);
`;

const TextSubmitButton = styled.span`
  background-color: ${props => props.theme.highlights[0]};
  border-radius: 14px;
  color: white;
  display: block;
  font-weight: bold;
  height: 24px;
  margin: 0 auto;
  padding-top: 4px;
  text-align: center;
  width: 28px;
`;

class TextInput extends React.Component {
  componentDidMount(){
    this.input.focus();
  }

  render () {
    const {content, onSubmitImage, onSubmitText, onUpdateMessage} = this.props;
    return (
      <TextView>
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
        <ImageSelect size={32} onSubmit={onSubmitImage} />
        <TextSubmitWrapper>
          <TextSubmitButton onClick={() => content !== '' && onSubmitText(content)}>></TextSubmitButton>
        </TextSubmitWrapper>
      </TextView>
    );
  }
}

export default TextInput;
