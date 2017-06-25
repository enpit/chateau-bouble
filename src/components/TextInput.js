import React from 'react';
import styled from 'styled-components';

const TextView = styled.div`
  background-color: #ededed;
  clear: right;
  height: calc(10% - 10px);
  padding: 5px;
  width: calc(100% - 10px);
`;

const TextInputWrapper = styled.div`
  display: inline-block;
  margin-left: 10px;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: calc(90% - 10px);
`;

const TextSubmitWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: 10%;
`;

const TextInputArea = styled.input`
  &::placeholder {
    color: #b2b2b2;
  }
  &:focus {
    outline: none;
  }
  border: 1px solid #b2b2b2;
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 10px;
  width: calc(100% - 22px);
`;

const TextSubmitButton = styled.span`
  background-color: #70d6ff;
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
    const {content, onSubmit, onUpdateMessage} = this.props;
    return (
      <TextView>
        <TextInputWrapper>
          <TextInputArea type="text"
            innerRef={(comp) => { this.input = comp }}
            value={content}
            onChange={(event) => onUpdateMessage(event.target.value)}
            onKeyUp={(event) => {
              if (event.keyCode === 13 && content !== '') {
                onSubmit(content);
              }
            }}
            placeholder="type here"
          />
        </TextInputWrapper>
        <TextSubmitWrapper>
          <TextSubmitButton onClick={() => onSubmit(content)}>></TextSubmitButton>
        </TextSubmitWrapper>
      </TextView>
    );
  }
}

export default TextInput;
