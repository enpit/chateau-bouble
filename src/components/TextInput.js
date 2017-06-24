import React from 'react';
import styled from 'styled-components';

const TextView = styled.div`
  background-color: #ededed;
  clear: right;
  padding: 5px;
  width: calc(100% - 10px);
`;

const TextInputWrapper = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: calc(90% - 10px);
`;

const TextSubmitWrapper = styled.div`
  display: inline-block;
  width: 10%;
`;

const TextInputArea = styled.input`
  &::placeholder {
    color: #b2b2b2;
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

const TextInput = ({text, onSubmit, onUpdateMessage}) => (
  <TextView>
    <TextInputWrapper>
      <TextInputArea type="text"
        value={text}
        onChange={(event) => onUpdateMessage(event.target.value)}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            onSubmit(text);
          }
        }}
        placeholder="type here"
      />
    </TextInputWrapper>
    <TextSubmitWrapper>
      <TextSubmitButton onClick={() => onSubmit(text)}>></TextSubmitButton>
    </TextSubmitWrapper>
  </TextView>
);

export default TextInput;
